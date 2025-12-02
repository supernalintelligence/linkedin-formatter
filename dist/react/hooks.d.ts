/**
 * React hooks for LinkedIn formatting
 * Optional import: '@supernal-social/linkedin-formatter/react'
 */
import type { ConversionOptions, AccessibilityReport, CharacterCountInfo } from '../types';
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
export declare function useLinkedInFormatter(initialMarkdown?: string, defaultOptions?: ConversionOptions): UseLinkedInFormatterResult;
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
export declare function useLinkedInConvert(markdown: string, options?: ConversionOptions): string;
//# sourceMappingURL=hooks.d.ts.map