"use strict";
/**
 * Unicode character mapping for text styling
 * Uses Mathematical Alphanumeric Symbols (U+1D400-U+1D7FF)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeStyles = void 0;
exports.applyStrikethrough = applyStrikethrough;
exports.convertToUnicodeStyle = convertToUnicodeStyle;
exports.unicodeToPlainText = unicodeToPlainText;
/**
 * Convert a single character to its Unicode styled equivalent
 */
function toUnicodeChar(char, baseUpper, baseLower, baseNum) {
    const code = char.charCodeAt(0);
    // Uppercase A-Z (65-90)
    if (code >= 65 && code <= 90) {
        return String.fromCodePoint(baseUpper + (code - 65));
    }
    // Lowercase a-z (97-122)
    if (code >= 97 && code <= 122) {
        return String.fromCodePoint(baseLower + (code - 97));
    }
    // Numbers 0-9 (48-57)
    if (baseNum && code >= 48 && code <= 57) {
        return String.fromCodePoint(baseNum + (code - 48));
    }
    return char;
}
/**
 * Unicode style definitions
 */
exports.unicodeStyles = {
    bold: {
        uppercase: (char) => toUnicodeChar(char, 0x1D400, 0x1D41A, 0x1D7CE),
        lowercase: (char) => toUnicodeChar(char, 0x1D400, 0x1D41A, 0x1D7CE),
        numbers: (char) => toUnicodeChar(char, 0x1D400, 0x1D41A, 0x1D7CE),
    },
    italic: {
        uppercase: (char) => toUnicodeChar(char, 0x1D434, 0x1D44E),
        lowercase: (char) => {
            // Special case: 'h' uses U+210E (Planck constant)
            if (char === 'h')
                return '\u210E';
            const code = char.charCodeAt(0);
            if (code >= 97 && code <= 122) {
                return String.fromCodePoint(0x1D44E + (code - 97));
            }
            return char;
        },
        numbers: undefined,
    },
    boldItalic: {
        uppercase: (char) => toUnicodeChar(char, 0x1D468, 0x1D482),
        lowercase: (char) => toUnicodeChar(char, 0x1D468, 0x1D482),
        numbers: undefined,
    },
    monospace: {
        uppercase: (char) => toUnicodeChar(char, 0x1D670, 0x1D68A, 0x1D7F6),
        lowercase: (char) => toUnicodeChar(char, 0x1D670, 0x1D68A, 0x1D7F6),
        numbers: (char) => toUnicodeChar(char, 0x1D670, 0x1D68A, 0x1D7F6),
    },
};
/**
 * Apply strikethrough using combining character
 */
function applyStrikethrough(text) {
    return text.split('').map(c => c + '\u0336').join('');
}
/**
 * Convert text to a specific Unicode style
 */
function convertToUnicodeStyle(text, style) {
    const styleMap = exports.unicodeStyles[style];
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return styleMap.uppercase(char);
        }
        else if (code >= 97 && code <= 122) {
            return styleMap.lowercase(char);
        }
        else if (styleMap.numbers && code >= 48 && code <= 57) {
            return styleMap.numbers(char);
        }
        return char;
    }).join('');
}
/**
 * Revert Unicode styled text back to plain ASCII
 */
function unicodeToPlainText(text) {
    return text.split('').map(char => {
        const code = char.codePointAt(0);
        if (!code)
            return char;
        // Bold uppercase (0x1D400-0x1D419)
        if (code >= 0x1D400 && code <= 0x1D419)
            return String.fromCharCode(65 + (code - 0x1D400));
        // Bold lowercase (0x1D41A-0x1D433)
        if (code >= 0x1D41A && code <= 0x1D433)
            return String.fromCharCode(97 + (code - 0x1D41A));
        // Bold numbers (0x1D7CE-0x1D7D7)
        if (code >= 0x1D7CE && code <= 0x1D7D7)
            return String.fromCharCode(48 + (code - 0x1D7CE));
        // Italic uppercase (0x1D434-0x1D44D)
        if (code >= 0x1D434 && code <= 0x1D44D)
            return String.fromCharCode(65 + (code - 0x1D434));
        // Italic lowercase (0x1D44E-0x1D467)
        if (code >= 0x1D44E && code <= 0x1D467)
            return String.fromCharCode(97 + (code - 0x1D44E));
        // Special italic h
        if (code === 0x210E)
            return 'h';
        // Monospace uppercase (0x1D670-0x1D689)
        if (code >= 0x1D670 && code <= 0x1D689)
            return String.fromCharCode(65 + (code - 0x1D670));
        // Monospace lowercase (0x1D68A-0x1D6A3)
        if (code >= 0x1D68A && code <= 0x1D6A3)
            return String.fromCharCode(97 + (code - 0x1D68A));
        // Monospace numbers (0x1D7F6-0x1D7FF)
        if (code >= 0x1D7F6 && code <= 0x1D7FF)
            return String.fromCharCode(48 + (code - 0x1D7F6));
        // Remove strikethrough combining character
        if (code === 0x0336)
            return '';
        return char;
    }).join('');
}
//# sourceMappingURL=unicode-maps.js.map