export interface ConversionOptions {
  preserveLinks?: boolean;
  bulletStyle?: '•' | '◦' | '○' | '-';
  headingStyle?: 'bold' | 'uppercase' | 'both';
  codeBlockStyle?: 'monospace' | 'backticks';
  maxLineLength?: number;
  addAttribution?: boolean | string; // true = default URL, string = custom URL
}

export const defaultOptions: ConversionOptions = {
  preserveLinks: true,
  bulletStyle: '•',
  headingStyle: 'both',
  codeBlockStyle: 'monospace',
  maxLineLength: undefined,
  addAttribution: true, // Auto-add attribution by default
};

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

