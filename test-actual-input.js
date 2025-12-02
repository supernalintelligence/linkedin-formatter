#!/usr/bin/env node

// Test script with the actual user input
const { markdownToLinkedIn } = require('./dist/index.js');

const actualInput = `**The 400 Files Per Hour Problem**

AI coding assistants are incredible. They can:
• Generate entire features in minutes
• Write tests faster than humans
• Refactor codebases in seconds
• Create 50+ files without breaking a sweat

**One problem**: They don't know what should actually be committed.

**Real scenario**:
• AI generates 50 files
• You're impressed, commit everything
• 15 files have bugs
• 10 files are experiments
• 5 files break tests
• Production goes down

**The solution**: Git hooks

Pre-commit checks:
• Run tests on AI-generated code
• Enforce code style automatically
• Catch syntax errors before commit
• Verify nothing breaks
• Block bad commits (AI or human)

**The magic**: AI can generate code at superhuman speed, but hooks ensure only production-ready code ships.

**Real results**:
- AI productivity: ✅ Maintained
- Code quality: ✅ Guaranteed
- Production incidents: ✅ Eliminated
- Team confidence: ✅ Restored

**Setup**: 5 minutes
\`\`\`
sc git-hooks install
# AI can now code safely at full speed
\`\`\`

Are you using AI assistants without safety checks?

---

Do you think this is useful or interesting? Let others know with a 👍, repost ♻️, and share your thoughts with a comment 💭!`;

console.log('🧪 Testing Actual User Input\n');
console.log('='.repeat(80));
console.log('\nINPUT:');
console.log(actualInput);
console.log('\n' + '='.repeat(80));

const output = markdownToLinkedIn(actualInput);

console.log('\nOUTPUT:');
console.log(output);
console.log('\n' + '='.repeat(80));

// Analysis
const inputLines = actualInput.split('\n');
const outputLines = output.split('\n');

console.log('\nANALYSIS:');
console.log('- Input line count:', inputLines.length);
console.log('- Output line count:', outputLines.length);
console.log('- Input has blank lines:', inputLines.some(l => l.trim() === ''));
console.log('- Output has blank lines:', outputLines.some(l => l.trim() === ''));

const inputBlankLines = inputLines.filter(l => l.trim() === '').length;
const outputBlankLines = outputLines.filter(l => l.trim() === '').length;
console.log('- Input blank line count:', inputBlankLines);
console.log('- Output blank line count:', outputBlankLines);
console.log('- Blank lines preserved:', inputBlankLines === outputBlankLines ? '✅' : '❌');

console.log('\n' + '='.repeat(80));

