import { 
  markdownToLinkedIn, 
  getPlainText, 
  checkAccessibility, 
  getCharacterCount,
  convertToUnicodeStyle,
  applyStrikethrough 
} from '../converter';

describe('Unicode Conversion', () => {
  test('converts bold text', () => {
    const input = '**Hello World**';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('𝗛𝗲𝗹𝗹𝗼');
    expect(output).not.toContain('**');
  });

  test('converts italic text', () => {
    const input = '*Hello World*';
    const output = markdownToLinkedIn(input);
    expect(output).toMatch(/\p{Script=Mathematical}/u);
    expect(output).not.toContain('*');
  });

  test('converts bold italic text', () => {
    const input = '***Bold Italic***';
    const output = markdownToLinkedIn(input);
    expect(output).toMatch(/\p{Script=Mathematical}/u);
    expect(output).not.toContain('***');
  });

  test('converts inline code to monospace', () => {
    const input = 'Use `console.log()` for debugging';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('𝚌𝚘𝚗𝚜𝚘𝚕𝚎');
  });

  test('converts strikethrough text', () => {
    const input = '~~deleted text~~';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('\u0336');
  });
});

describe('Markdown Elements', () => {
  test('converts headings to bold uppercase', () => {
    const input = '# Main Title\n## Subtitle';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('𝗠𝗔𝗜𝗡');
    expect(output).not.toContain('#');
  });

  test('converts unordered lists', () => {
    const input = '- Item 1\n- Item 2\n- Item 3';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('• Item 1');
    expect(output).toContain('• Item 2');
  });

  test('converts ordered lists', () => {
    const input = '1. First\n2. Second\n3. Third';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('1. First');
    expect(output).toContain('2. Second');
  });

  test('handles links with preserveLinks option', () => {
    const input = '[Click here](https://example.com)';
    const output = markdownToLinkedIn(input, { preserveLinks: true });
    expect(output).toBe('Click here (https://example.com)');
  });

  test('removes links without preserveLinks option', () => {
    const input = '[Click here](https://example.com)';
    const output = markdownToLinkedIn(input, { preserveLinks: false });
    expect(output).toBe('Click here');
  });
});

describe('Code Blocks', () => {
  test('converts code blocks to monospace', () => {
    const input = '```javascript\nconst x = 10;\n```';
    const output = markdownToLinkedIn(input, { codeBlockStyle: 'monospace' });
    expect(output).toContain('𝚌𝚘𝚗𝚜𝚝');
  });

  test('preserves code blocks with backticks option', () => {
    const input = '```\ncode here\n```';
    const output = markdownToLinkedIn(input, { codeBlockStyle: 'backticks' });
    expect(output).toContain('`');
  });
});

describe('Plain Text Conversion', () => {
  test('converts Unicode back to plain text', () => {
    const formatted = convertToUnicodeStyle('Hello', 'bold');
    const plain = getPlainText(formatted);
    expect(plain).toBe('Hello');
  });

  test('removes strikethrough combining characters', () => {
    const formatted = applyStrikethrough('deleted');
    const plain = getPlainText(formatted);
    expect(plain).toBe('deleted');
    expect(plain).not.toContain('\u0336');
  });
});

describe('Accessibility Checks', () => {
  test('detects Unicode formatting', () => {
    const formatted = convertToUnicodeStyle('Bold Text', 'bold');
    const report = checkAccessibility(formatted);
    expect(report.hasUnicodeFormatting).toBe(true);
    expect(report.unicodeCharCount).toBeGreaterThan(0);
    expect(report.warnings.length).toBeGreaterThan(0);
  });

  test('reports no issues for plain text', () => {
    const plain = 'Just plain text';
    const report = checkAccessibility(plain);
    expect(report.hasUnicodeFormatting).toBe(false);
    expect(report.unicodeCharCount).toBe(0);
  });

  test('warns about high Unicode percentage', () => {
    const formatted = convertToUnicodeStyle('This is almost all formatted text here', 'bold');
    const report = checkAccessibility(formatted);
    expect(report.unicodePercentage).toBeGreaterThan(50);
    expect(report.warnings.some(w => w.includes('High percentage'))).toBe(true);
  });
});

describe('Character Counting', () => {
  test('counts total characters correctly', () => {
    const text = 'Hello World';
    const info = getCharacterCount(text);
    expect(info.total).toBe(11);
    expect(info.plain).toBe(11);
  });

  test('detects LinkedIn limit exceeded', () => {
    const longText = 'a'.repeat(3001);
    const info = getCharacterCount(longText);
    expect(info.exceedsLimit).toBe(true);
    expect(info.remaining).toBeLessThan(0);
  });

  test('calculates remaining characters', () => {
    const text = 'Short text';
    const info = getCharacterCount(text);
    expect(info.remaining).toBe(3000 - text.length);
  });
});

describe('Complex Markdown', () => {
  test('handles mixed formatting', () => {
    const input = `
# Title

This is **bold** and this is *italic*.

- List item 1
- List item 2

Check out [my site](https://example.com)

\`\`\`
code block
\`\`\`
    `.trim();
    
    const output = markdownToLinkedIn(input);
    expect(output).toContain('𝗧𝗜𝗧𝗟𝗘');
    expect(output).toContain('•');
    expect(output).toContain('example.com');
  });

  test('preserves newlines and spacing', () => {
    const input = 'Line 1\n\nLine 2\n\nLine 3';
    const output = markdownToLinkedIn(input);
    expect(output.split('\n').length).toBeGreaterThanOrEqual(3);
  });
});

describe('Edge Cases', () => {
  test('handles empty string', () => {
    expect(markdownToLinkedIn('')).toBe('');
  });

  test('handles text with no markdown', () => {
    const plain = 'Just plain text';
    expect(markdownToLinkedIn(plain)).toBe(plain);
  });

  test('handles special characters', () => {
    const input = '**Hello & goodbye!**';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('&');
    expect(output).toContain('!');
  });

  test('handles numbers in styled text', () => {
    const input = '**Number 123**';
    const output = markdownToLinkedIn(input);
    expect(output).toContain('𝟏𝟐𝟑');
  });
});

