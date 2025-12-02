/**
 * Unicode character mapping for text styling
 * Uses Mathematical Alphanumeric Symbols (U+1D400-U+1D7FF)
 */
export interface UnicodeStyle {
    uppercase: (char: string) => string;
    lowercase: (char: string) => string;
    numbers?: (char: string) => string;
}
/**
 * Unicode style definitions
 */
export declare const unicodeStyles: {
    bold: UnicodeStyle;
    italic: UnicodeStyle;
    boldItalic: UnicodeStyle;
    monospace: UnicodeStyle;
};
/**
 * Apply strikethrough using combining character
 */
export declare function applyStrikethrough(text: string): string;
/**
 * Convert text to a specific Unicode style
 */
export declare function convertToUnicodeStyle(text: string, style: keyof typeof unicodeStyles): string;
/**
 * Revert Unicode styled text back to plain ASCII
 */
export declare function unicodeToPlainText(text: string): string;
//# sourceMappingURL=unicode-maps.d.ts.map