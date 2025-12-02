import MarkdownIt from 'markdown-it';
import { convertToUnicodeStyle, applyStrikethrough, unicodeToPlainText } from './unicode-maps';
import { ConversionOptions, defaultOptions, AccessibilityReport, CharacterCountInfo } from './types';

// Re-export types for convenience
export type { ConversionOptions, AccessibilityReport, CharacterCountInfo } from './types';

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

/**
 * Convert Markdown to LinkedIn-formatted text
 */
export function markdownToLinkedIn(markdown: string, options: ConversionOptions = {}): string {
  const opts = { ...defaultOptions, ...options };
  
  // Convert literal \n sequences to actual newlines (common when copying from some sources)
  let result = markdown.replace(/\\n/g, '\n');

  // Handle code blocks first (preserve them)
  const codeBlocks: string[] = [];
  result = result.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.replace(/```(\w*)\n?/, '').replace(/```$/, '');
    const formatted = opts.codeBlockStyle === 'monospace'
      ? convertToUnicodeStyle(code, 'monospace')
      : `\`${code}\``;
    codeBlocks.push(formatted);
    return `\x00CODEBLOCK${codeBlocks.length - 1}\x00`;
  });

  // Handle inline code
  result = result.replace(/`([^`]+)`/g, (_, code) => {
    return convertToUnicodeStyle(code, 'monospace');
  });

  // Handle bold italic (must come before bold and italic)
  result = result.replace(/\*\*\*([^*]+)\*\*\*/g, (_, text) => {
    return convertToUnicodeStyle(text, 'boldItalic');
  });
  result = result.replace(/___([^_]+)___/g, (_, text) => {
    return convertToUnicodeStyle(text, 'boldItalic');
  });

  // Handle bold
  result = result.replace(/\*\*([^*]+)\*\*/g, (_, text) => {
    return convertToUnicodeStyle(text, 'bold');
  });
  result = result.replace(/__([^_]+)__/g, (_, text) => {
    return convertToUnicodeStyle(text, 'bold');
  });

  // Handle italic
  result = result.replace(/\*([^*]+)\*/g, (_, text) => {
    return convertToUnicodeStyle(text, 'italic');
  });
  result = result.replace(/_([^_]+)_/g, (_, text) => {
    return convertToUnicodeStyle(text, 'italic');
  });

  // Handle strikethrough
  result = result.replace(/~~([^~]+)~~/g, (_, text) => {
    return applyStrikethrough(text);
  });

  // Handle headings
  result = result.replace(/^#{1,6}\s+(.+)$/gm, (_, text) => {
    let heading = text;
    if (opts.headingStyle === 'uppercase' || opts.headingStyle === 'both') {
      heading = heading.toUpperCase();
    }
    if (opts.headingStyle === 'bold' || opts.headingStyle === 'both') {
      heading = convertToUnicodeStyle(heading, 'bold');
    }
    return `\n${heading}\n`;
  });

  // Handle unordered lists
  result = result.replace(/^[\-\*\+]\s+(.+)$/gm, (_, text) => {
    return `${opts.bulletStyle} ${text}`;
  });

  // Handle ordered lists
  let orderedListCounter = 0;
  result = result.replace(/^\d+\.\s+(.+)$/gm, (_, text) => {
    orderedListCounter++;
    return `${orderedListCounter}. ${text}`;
  });

  // Handle links
  if (opts.preserveLinks) {
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
      return `${text} (${url})`;
    });
  } else {
    result = result.replace(/\[([^\]]+)\]\([^)]+\)/g, (_, text) => {
      return text;
    });
  }

  // Restore code blocks
  codeBlocks.forEach((block, index) => {
    result = result.replace(`\x00CODEBLOCK${index}\x00`, block);
  });

  // Handle line length if specified
  if (opts.maxLineLength) {
    const lines = result.split('\n');
    result = lines.map(line => {
      if (line.length <= opts.maxLineLength!) return line;
      const words = line.split(' ');
      const wrappedLines: string[] = [];
      let currentLine = '';
      
      words.forEach(word => {
        if ((currentLine + ' ' + word).length <= opts.maxLineLength!) {
          currentLine += (currentLine ? ' ' : '') + word;
        } else {
          if (currentLine) wrappedLines.push(currentLine);
          currentLine = word;
        }
      });
      
      if (currentLine) wrappedLines.push(currentLine);
      return wrappedLines.join('\n');
    }).join('\n');
  }

  // Add attribution if enabled
  if (opts.addAttribution) {
    const attributionMarker = '---\nFormatted with';
    // Avoid duplicate attribution
    if (!result.includes(attributionMarker)) {
      const url = typeof opts.addAttribution === 'string' 
        ? opts.addAttribution 
        : 'https://supernal.ai/tools/linkedin-formatter';
      result += `\n\n---\nFormatted with ${url}`;
    }
  }

  return result.trim();
}

/**
 * Get plain text version (strip all Unicode formatting)
 */
export function getPlainText(formattedText: string): string {
  return unicodeToPlainText(formattedText);
}

/**
 * Check accessibility issues
 */
export function checkAccessibility(text: string): AccessibilityReport {
  const plainText = getPlainText(text);
  const warnings: string[] = [];
  
  let unicodeCount = 0;
  for (const char of text) {
    const code = char.codePointAt(0);
    if (code && (
      (code >= 0x1D400 && code <= 0x1D7FF) || // Math alphanumeric
      code === 0x0336 || // Strikethrough
      code === 0x210E    // Italic h
    )) {
      unicodeCount++;
    }
  }
  
  const unicodePercentage = (unicodeCount / text.length) * 100;
  
  if (unicodePercentage > 30) {
    warnings.push('High percentage of Unicode formatting may impact accessibility');
  }
  
  if (unicodeCount > 0) {
    warnings.push('Screen readers may not properly read Unicode-styled text');
    warnings.push('Search engines may not index styled text properly');
  }
  
  if (text.includes('\u0336')) {
    warnings.push('Strikethrough text may not be announced by screen readers');
  }
  
  return {
    hasUnicodeFormatting: unicodeCount > 0,
    unicodeCharCount: unicodeCount,
    plainTextLength: plainText.length,
    unicodePercentage,
    warnings,
  };
}

/**
 * Get character count information
 */
export function getCharacterCount(text: string): CharacterCountInfo {
  const plainText = getPlainText(text);
  const linkedInLimit = 3000;
  
  let unicodeCount = 0;
  for (const char of text) {
    const code = char.codePointAt(0);
    if (code && code >= 0x1D400 && code <= 0x1D7FF) {
      unicodeCount++;
    }
  }
  
  return {
    total: text.length,
    plain: plainText.length,
    unicode: unicodeCount,
    linkedInLimit,
    remaining: linkedInLimit - text.length,
    exceedsLimit: text.length > linkedInLimit,
  };
}

/**
 * Check if text will exceed LinkedIn's character limit
 */
export function willExceedLimit(text: string, customLimit?: number): boolean {
  const limit = customLimit || 3000;
  return text.length > limit;
}

