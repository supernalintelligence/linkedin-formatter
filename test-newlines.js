#!/usr/bin/env node

// Test script specifically for newline handling
const { markdownToLinkedIn } = require('./dist/index.js');

console.log('🧪 Testing Newline Handling\n');
console.log('='.repeat(80));

// Test from the user's screenshot
const input = `incredible. They can:\\n• Generate entire features in minutes\\n• Write tests faster than humans\\n• Refactor codebases in seconds\\n• Create 50+ files without breaking a sweat\\n\\n**One problem**: They don't know what should actually be committed.\\n\\n**Real scenario**: \\n• AI generates 50 files\\n• You're impressed, commit everything\\n• 15 files have bugs\\n• 10 files are experiments\\n• 5 files break tests\\n• Production goes down\\n\\n **The solution**: Git hooks\\n\\nPre-commit checks:\\n• Run tests on AI-generated code\\n• Enforce code style automatically\\n• Catch syntax errors before commit\\n• Verify nothing breaks\\n• Block bad commits (AI or human)\\n\\n**The magic**: AI can generate code at superhuman speed, but hooks ensure only production-ready code ships.\\n\\n**Real results**:\\n- AI productivity: ✅ Maintained\\n- Code quality: ✅ Guaranteed\\n- Production incidents: ✅ Eliminated\\n- Team confidence: ✅ Restored\\n\\n**Setup**: 5 minutes\\n_CODEBLOCK0_\\n\\nAre you using AI assistants without safety checks?\\n\\n---\\n\\nDo you think this is useful or interesting? Let others know with a 👍, repost ♻️, and share your thoughts with a comment 💬!"`;

console.log('\nINPUT (with escaped \\n):');
console.log(input);

console.log('\n' + '='.repeat(80));

// Parse the escaped \n into actual newlines
const parsedInput = input.replace(/\\n/g, '\n');

console.log('\nPARSED INPUT (actual newlines):');
console.log(parsedInput);

console.log('\n' + '='.repeat(80));

const output = markdownToLinkedIn(parsedInput);

console.log('\nOUTPUT:');
console.log(output);

console.log('\n' + '='.repeat(80));

// Check specific issues
console.log('\nANALYSIS:');
console.log('- Input has double newlines (\\n\\n):', parsedInput.includes('\n\n'));
console.log('- Output has double newlines:', output.includes('\n\n'));
console.log('- Input newline count:', (parsedInput.match(/\n/g) || []).length);
console.log('- Output newline count:', (output.match(/\n/g) || []).length);

// Check if paragraph spacing is preserved
const inputDoubleNewlines = (parsedInput.match(/\n\n/g) || []).length;
const outputDoubleNewlines = (output.match(/\n\n/g) || []).length;
console.log('- Input double-newline sections:', inputDoubleNewlines);
console.log('- Output double-newline sections:', outputDoubleNewlines);
console.log('- Preserved paragraph spacing:', inputDoubleNewlines === outputDoubleNewlines ? '✅' : '❌');

console.log('\n' + '='.repeat(80));

