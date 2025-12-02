"use strict";
/**
 * React hooks for LinkedIn formatting
 * Optional import: '@supernal-social/linkedin-formatter/react'
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLinkedInFormatter = useLinkedInFormatter;
exports.useLinkedInConvert = useLinkedInConvert;
const react_1 = require("react");
const converter_1 = require("../converter");
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
function useLinkedInFormatter(initialMarkdown = '', defaultOptions) {
    const [markdown, setMarkdown] = (0, react_1.useState)(initialMarkdown);
    const [options, setOptions] = (0, react_1.useState)(defaultOptions);
    const formatted = (0, react_1.useMemo)(() => {
        if (!markdown)
            return '';
        return (0, converter_1.markdownToLinkedIn)(markdown, options);
    }, [markdown, options]);
    const plainText = (0, react_1.useMemo)(() => {
        return (0, converter_1.getPlainText)(formatted);
    }, [formatted]);
    const accessibility = (0, react_1.useMemo)(() => {
        return (0, converter_1.checkAccessibility)(formatted);
    }, [formatted]);
    const charCount = (0, react_1.useMemo)(() => {
        return (0, converter_1.getCharacterCount)(formatted);
    }, [formatted]);
    const convert = (0, react_1.useCallback)((newMarkdown, newOptions) => {
        setMarkdown(newMarkdown);
        if (newOptions) {
            setOptions(newOptions);
        }
    }, []);
    const copyToClipboard = (0, react_1.useCallback)(async () => {
        if (!formatted)
            return;
        await navigator.clipboard.writeText(formatted);
    }, [formatted]);
    const copyPlainToClipboard = (0, react_1.useCallback)(async () => {
        if (!plainText)
            return;
        await navigator.clipboard.writeText(plainText);
    }, [plainText]);
    const clear = (0, react_1.useCallback)(() => {
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
function useLinkedInConvert(markdown, options) {
    return (0, react_1.useMemo)(() => {
        if (!markdown)
            return '';
        return (0, converter_1.markdownToLinkedIn)(markdown, options);
    }, [markdown, options]);
}
//# sourceMappingURL=hooks.js.map