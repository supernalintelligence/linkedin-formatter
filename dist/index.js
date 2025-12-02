"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeStyles = exports.unicodeToPlainText = exports.applyStrikethrough = exports.convertToUnicodeStyle = exports.willExceedLimit = exports.getCharacterCount = exports.checkAccessibility = exports.getPlainText = exports.markdownToLinkedIn = void 0;
// ============================================================================
// CORE EXPORTS - Pure JavaScript, no framework dependencies
// ============================================================================
var converter_1 = require("./converter");
Object.defineProperty(exports, "markdownToLinkedIn", { enumerable: true, get: function () { return converter_1.markdownToLinkedIn; } });
Object.defineProperty(exports, "getPlainText", { enumerable: true, get: function () { return converter_1.getPlainText; } });
Object.defineProperty(exports, "checkAccessibility", { enumerable: true, get: function () { return converter_1.checkAccessibility; } });
Object.defineProperty(exports, "getCharacterCount", { enumerable: true, get: function () { return converter_1.getCharacterCount; } });
Object.defineProperty(exports, "willExceedLimit", { enumerable: true, get: function () { return converter_1.willExceedLimit; } });
var unicode_maps_1 = require("./unicode-maps");
Object.defineProperty(exports, "convertToUnicodeStyle", { enumerable: true, get: function () { return unicode_maps_1.convertToUnicodeStyle; } });
Object.defineProperty(exports, "applyStrikethrough", { enumerable: true, get: function () { return unicode_maps_1.applyStrikethrough; } });
Object.defineProperty(exports, "unicodeToPlainText", { enumerable: true, get: function () { return unicode_maps_1.unicodeToPlainText; } });
Object.defineProperty(exports, "unicodeStyles", { enumerable: true, get: function () { return unicode_maps_1.unicodeStyles; } });
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
//# sourceMappingURL=index.js.map