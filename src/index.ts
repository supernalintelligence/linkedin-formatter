/**
 * @supernal-social/linkedin-formatter
 * 
 * Framework-agnostic package structure:
 * 
 * - Core algorithms (no framework dependencies)
 * - Optional React hooks
 * - Optional React components
 * - Copy-paste widgets for Next.js
 */

// ============================================================================
// CORE EXPORTS - Pure JavaScript, no framework dependencies
// ============================================================================

export { 
  markdownToLinkedIn, 
  getPlainText, 
  checkAccessibility, 
  getCharacterCount,
  willExceedLimit 
} from './converter';

export { 
  convertToUnicodeStyle, 
  applyStrikethrough, 
  unicodeToPlainText,
  unicodeStyles 
} from './unicode-maps';

export type { 
  ConversionOptions, 
  AccessibilityReport, 
  CharacterCountInfo 
} from './types';

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/**
 * Example 1: Pure JavaScript (Node.js, browser, any framework)
 * 
 * ```typescript
 * import { markdownToLinkedIn } from '@supernal-social/linkedin-formatter';
 * 
 * const formatted = markdownToLinkedIn('**Hello LinkedIn!**');
 * console.log(formatted); // 𝐇𝐞𝐥𝐥𝐨 𝐋𝐢𝐧𝐤𝐞𝐝𝐈𝐧!
 * ```
 */

/**
 * Example 2: React Hook (works in any React framework)
 * 
 * ```typescript
 * import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';
 * 
 * function MyComponent() {
 *   const { formatted, convert, copyToClipboard } = useLinkedInFormatter();
 *   
 *   return (
 *     <div>
 *       <textarea onChange={(e) => convert(e.target.value)} />
 *       <div>{formatted}</div>
 *       <button onClick={copyToClipboard}>Copy</button>
 *     </div>
 *   );
 * }
 * ```
 */

/**
 * Example 3: React Component (ready-made UI)
 * 
 * ```typescript
 * import { LinkedInFormatter } from '@supernal-social/linkedin-formatter/react';
 * 
 * function MyPage() {
 *   return <LinkedInFormatter />;
 * }
 * ```
 */

/**
 * Example 4: Next.js Widget (copy-paste ready)
 * 
 * See: /widgets/next/ for complete Next.js examples
 * 
 * ```typescript
 * import LinkedInFormatterWidget from '@supernal-social/linkedin-formatter/widgets';
 * 
 * export default function Page() {
 *   return <LinkedInFormatterWidget />;
 * }
 * ```
 */
