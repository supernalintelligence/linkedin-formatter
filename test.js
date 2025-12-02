#!/usr/bin/env node

// Simple test script for linkedin-formatter
const { 
  markdownToLinkedIn, 
  getPlainText, 
  checkAccessibility, 
  getCharacterCount 
} = require('./dist/index.js');

console.log('🧪 Testing LinkedIn Formatter\n');
console.log('='.repeat(60));

// Test 1: Bold text
console.log('\n✅ Test 1: Bold Text');
const boldInput = '**Hello World**';
const boldOutput = markdownToLinkedIn(boldInput);
console.log(`Input:  ${boldInput}`);
console.log(`Output: ${boldOutput}`);
console.log(`Pass:   ${boldOutput.includes('𝗛𝗲𝗹𝗹𝗼')}`);

// Test 2: Italic text
console.log('\n✅ Test 2: Italic Text');
const italicInput = '*Hello World*';
const italicOutput = markdownToLinkedIn(italicInput);
console.log(`Input:  ${italicInput}`);
console.log(`Output: ${italicOutput}`);
console.log(`Pass:   ${!italicOutput.includes('*')}`);

// Test 3: Mixed formatting
console.log('\n✅ Test 3: Mixed Formatting');
const mixedInput = `# Title

This is **bold** and this is *italic*.

- Item 1
- Item 2

Check out [my site](https://example.com)`;
const mixedOutput = markdownToLinkedIn(mixedInput);
console.log(`Input:\n${mixedInput}`);
console.log(`\nOutput:\n${mixedOutput}`);

// Test 4: Character counting
console.log('\n✅ Test 4: Character Counting');
const charCount = getCharacterCount(mixedOutput);
console.log(`Total characters: ${charCount.total}`);
console.log(`Unicode characters: ${charCount.unicode}`);
console.log(`Remaining (LinkedIn limit): ${charCount.remaining}`);
console.log(`Exceeds limit: ${charCount.exceedsLimit}`);

// Test 5: Accessibility check
console.log('\n✅ Test 5: Accessibility Check');
const accessibility = checkAccessibility(mixedOutput);
console.log(`Has Unicode formatting: ${accessibility.hasUnicodeFormatting}`);
console.log(`Unicode percentage: ${accessibility.unicodePercentage.toFixed(1)}%`);
console.log(`Warnings: ${accessibility.warnings.length}`);
accessibility.warnings.forEach((w, i) => console.log(`  ${i + 1}. ${w}`));

// Test 6: Plain text conversion
console.log('\n✅ Test 6: Plain Text Conversion');
const plainText = getPlainText(boldOutput);
console.log(`Formatted: ${boldOutput}`);
console.log(`Plain:     ${plainText}`);
console.log(`Pass:      ${plainText === 'Hello World'}`);

// Test 7: Code blocks
console.log('\n✅ Test 7: Code Blocks');
const codeInput = 'Use `console.log()` for debugging';
const codeOutput = markdownToLinkedIn(codeInput);
console.log(`Input:  ${codeInput}`);
console.log(`Output: ${codeOutput}`);
console.log(`Pass:   ${codeOutput.includes('𝚌𝚘𝚗𝚜𝚘𝚕𝚎')}`);

// Test 8: Lists
console.log('\n✅ Test 8: Lists');
const listInput = `- Item 1\n- Item 2\n- Item 3`;
const listOutput = markdownToLinkedIn(listInput);
console.log(`Input:\n${listInput}`);
console.log(`\nOutput:\n${listOutput}`);
console.log(`Pass:   ${listOutput.includes('•')}`);

// Test 9: Headings
console.log('\n✅ Test 9: Headings');
const headingInput = '# Main Title';
const headingOutput = markdownToLinkedIn(headingInput);
console.log(`Input:  ${headingInput}`);
console.log(`Output: ${headingOutput}`);
console.log(`Pass:   ${headingOutput.includes('𝗠𝗔𝗜𝗡')}`);

// Test 10: Strikethrough
console.log('\n✅ Test 10: Strikethrough');
const strikeInput = '~~deleted text~~';
const strikeOutput = markdownToLinkedIn(strikeInput);
console.log(`Input:  ${strikeInput}`);
console.log(`Output: ${strikeOutput}`);
console.log(`Pass:   ${strikeOutput.includes('\u0336')}`);

console.log('\n' + '='.repeat(60));
console.log('✨ All tests completed!\n');

