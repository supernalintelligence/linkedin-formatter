#!/usr/bin/env node

// Test with the EXACT user input format (with literal \n)
const { markdownToLinkedIn } = require('./dist/index.js');

// This is exactly what the user pasted (with literal \n as text)
const userInput = `"**The 400 Files Per Hour Problem**\\n\\nAI coding assistants are incredible. They can:\\n• Generate entire features in minutes\\n• Write tests faster than humans\\n• Refactor codebases in seconds\\n• Create 50+ files without breaking a sweat\\n\\n**One problem**: They don't know what should actually be committed.\\n\\n**Real scenario**:\\n• AI generates 50 files\\n• You're impressed, commit everything\\n• 15 files have bugs\\n• 10 files are experiments\\n• 5 files break tests\\n• Production goes down\\n\\n**The solution**: Git hooks\\n\\nPre-commit checks:\\n• Run tests on AI-generated code\\n• Enforce code style automatically\\n• Catch syntax errors before commit\\n• Verify nothing breaks\\n• Block bad commits (AI or human)\\n\\n**The magic**: AI can generate code at superhuman speed, but hooks ensure only production-ready code ships.\\n\\n**Real results**:\\n- AI productivity: ✅ Maintained\\n- Code quality: ✅ Guaranteed\\n- Production incidents: ✅ Eliminated\\n- Team confidence: ✅ Restored\\n\\n**Setup**: 5 minutes\\n\`\`\`\\nsc git-hooks install\\n# AI can now code safely at full speed\\n\`\`\`\\n\\nAre you using AI assistants without safety checks?\\n\\n---\\n\\nDo you think this is useful or interesting? Let others know with a 👍, repost ♻️, and share your thoughts with a comment 💭!"`;

console.log('🧪 Testing EXACT User Input (with literal \\n)\n');
console.log('='.repeat(80));
console.log('\nINPUT (as user pasted it):');
console.log(userInput);
console.log('\n' + '='.repeat(80));

const output = markdownToLinkedIn(userInput);

console.log('\nOUTPUT:');
console.log(output);
console.log('\n' + '='.repeat(80));

// Check if properly formatted
const hasNewlines = output.includes('\n\n');
const hasBoldHeading = output.includes('𝐓𝐡𝐞') || output.includes('𝟒𝟎𝟎');
const hasBullets = output.includes('•');
const hasCodeBlock = output.includes('𝚜𝚌') || output.includes('𝚐𝚒𝚝');

console.log('\n✅ VALIDATION:');
console.log('- Has proper newlines:', hasNewlines ? '✅' : '❌');
console.log('- Has bold formatting:', hasBoldHeading ? '✅' : '❌');
console.log('- Has bullet points:', hasBullets ? '✅' : '❌');
console.log('- Has monospace code:', hasCodeBlock ? '✅' : '❌');
console.log('\n' + '='.repeat(80));

