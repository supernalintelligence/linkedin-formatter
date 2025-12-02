/**
 * React hooks for LinkedIn formatting
 * Optional import: '@supernal-social/linkedin-formatter/react'
 */

import { useState, useCallback, useMemo } from 'react';
import { 
  markdownToLinkedIn, 
  getPlainText, 
  checkAccessibility, 
  getCharacterCount
} from '../converter';
import type { 
  ConversionOptions,
  AccessibilityReport,
  CharacterCountInfo 
} from '../types';

export interface UseLinkedInFormatterResult {
  formatted: string;
  plainText: string;
  accessibility: AccessibilityReport;
  charCount: CharacterCountInfo;
  convert: (markdown: string, options?: ConversionOptions) => void;
  copyToClipboard: () => Promise<void>;
  copyPlainToClipboard: () => Promise<void>;
  clear: () => void;
}

/**
 * React hook for LinkedIn formatting
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { formatted, convert, copyToClipboard, charCount } = useLinkedInFormatter();
 *   
 *   return (
 *     <div>
 *       <textarea onChange={(e) => convert(e.target.value)} />
 *       <pre>{formatted}</pre>
 *       <button onClick={copyToClipboard}>Copy</button>
 *       <span>{charCount.remaining} chars remaining</span>
 *     </div>
 *   );
 * }
 * ```
 */
export function useLinkedInFormatter(
  initialMarkdown = '',
  defaultOptions?: ConversionOptions
): UseLinkedInFormatterResult {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [options, setOptions] = useState<ConversionOptions | undefined>(defaultOptions);

  const formatted = useMemo(() => {
    if (!markdown) return '';
    return markdownToLinkedIn(markdown, options);
  }, [markdown, options]);

  const plainText = useMemo(() => {
    return getPlainText(formatted);
  }, [formatted]);

  const accessibility = useMemo(() => {
    return checkAccessibility(formatted);
  }, [formatted]);

  const charCount = useMemo(() => {
    return getCharacterCount(formatted);
  }, [formatted]);

  const convert = useCallback((newMarkdown: string, newOptions?: ConversionOptions) => {
    setMarkdown(newMarkdown);
    if (newOptions) {
      setOptions(newOptions);
    }
  }, []);

  const copyToClipboard = useCallback(async () => {
    if (!formatted) return;
    await navigator.clipboard.writeText(formatted);
  }, [formatted]);

  const copyPlainToClipboard = useCallback(async () => {
    if (!plainText) return;
    await navigator.clipboard.writeText(plainText);
  }, [plainText]);

  const clear = useCallback(() => {
    setMarkdown('');
  }, []);

  return {
    formatted,
    plainText,
    accessibility,
    charCount,
    convert,
    copyToClipboard,
    copyPlainToClipboard,
    clear,
  };
}

/**
 * Simple hook for just conversion (no state management)
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const [text, setText] = useState('');
 *   const formatted = useLinkedInConvert(text);
 *   
 *   return (
 *     <div>
 *       <input value={text} onChange={(e) => setText(e.target.value)} />
 *       <output>{formatted}</output>
 *     </div>
 *   );
 * }
 * ```
 */
export function useLinkedInConvert(markdown: string, options?: ConversionOptions): string {
  return useMemo(() => {
    if (!markdown) return '';
    return markdownToLinkedIn(markdown, options);
  }, [markdown, options]);
}

