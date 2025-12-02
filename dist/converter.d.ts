import { ConversionOptions, AccessibilityReport, CharacterCountInfo } from './types';
export type { ConversionOptions, AccessibilityReport, CharacterCountInfo } from './types';
/**
 * Convert Markdown to LinkedIn-formatted text
 */
export declare function markdownToLinkedIn(markdown: string, options?: ConversionOptions): string;
/**
 * Get plain text version (strip all Unicode formatting)
 */
export declare function getPlainText(formattedText: string): string;
/**
 * Check accessibility issues
 */
export declare function checkAccessibility(text: string): AccessibilityReport;
/**
 * Get character count information
 */
export declare function getCharacterCount(text: string): CharacterCountInfo;
/**
 * Check if text will exceed LinkedIn's character limit
 */
export declare function willExceedLimit(text: string, customLimit?: number): boolean;
//# sourceMappingURL=converter.d.ts.map