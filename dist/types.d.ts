export interface ConversionOptions {
    preserveLinks?: boolean;
    bulletStyle?: '•' | '◦' | '○' | '-';
    headingStyle?: 'bold' | 'uppercase' | 'both';
    codeBlockStyle?: 'monospace' | 'backticks';
    maxLineLength?: number;
}
export declare const defaultOptions: ConversionOptions;
export interface AccessibilityReport {
    hasUnicodeFormatting: boolean;
    unicodeCharCount: number;
    plainTextLength: number;
    unicodePercentage: number;
    warnings: string[];
}
export interface CharacterCountInfo {
    total: number;
    plain: number;
    unicode: number;
    linkedInLimit: number;
    remaining: number;
    exceedsLimit: boolean;
}
//# sourceMappingURL=types.d.ts.map