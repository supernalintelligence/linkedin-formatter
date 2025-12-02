#!/usr/bin/env node

// Test to demonstrate the literal \n vs actual newline issue
const { markdownToLinkedIn } = require('./dist/index.js');

console.log('🧪 Testing Literal \\n vs Actual Newlines\n');
console.log('='.repeat(80));

// This is what the user is pasting (literal \n in the string)
const withLiteralBackslashN = `**Test**\\n\\nThis has literal backslash-n`;

console.log('\n1️⃣  INPUT WITH LITERAL \\n (what user is pasting):');
console.log(withLiteralBackslashN);
console.log('\nOUTPUT:');
console.log(markdownToLinkedIn(withLiteralBackslashN));

console.log('\n' + '='.repeat(80));

// This is what it should be (actual newlines)
const withActualNewlines = `**Test**

This has actual newlines`;

console.log('\n2️⃣  INPUT WITH ACTUAL NEWLINES (what it should be):');
console.log(withActualNewlines);
console.log('\nOUTPUT:');
console.log(markdownToLinkedIn(withActualNewlines));

console.log('\n' + '='.repeat(80));

// Solution: convert literal \n to actual newlines
console.log('\n3️⃣  SOLUTION - Convert literal \\n to actual newlines:');
const converted = withLiteralBackslashN.replace(/\\n/g, '\n');
console.log('INPUT AFTER CONVERSION:');
console.log(converted);
console.log('\nOUTPUT:');
console.log(markdownToLinkedIn(converted));

console.log('\n' + '='.repeat(80));

