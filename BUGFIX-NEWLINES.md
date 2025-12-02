# Newline Handling Bug Fix

## Issues Fixed

### 1. Literal `\n` Not Converted to Actual Newlines
**Problem**: When users pasted text containing literal `\n` characters (the two-character sequence: backslash + n), they were not being converted to actual line breaks, causing the output to display `\n\n` as text instead of paragraph breaks.

**Root Cause**: The converter expected actual newline characters in the input markdown, but many text sources (especially when copying from certain editors or platforms) include literal `\n` escape sequences.

**Solution**: Added automatic detection and conversion of literal `\n` sequences to actual newlines at the start of the conversion process.

```typescript
// Convert literal \n sequences to actual newlines (common when copying from some sources)
let result = markdown.replace(/\\n/g, '\n');
```

### 2. Code Block Placeholder Interference
**Problem**: Code blocks were showing as malformed text like `_𝐶𝑂𝐷𝐸𝐵𝐿𝑂𝐶𝐾0__` instead of properly formatted monospace code.

**Root Cause**: The placeholder `__CODEBLOCK_0__` used underscores, which were being matched by the bold formatting regex `/__([^_]+)__/g` before the placeholder could be restored. This caused the placeholder to be partially converted to Unicode bold characters.

**Solution**: Changed the placeholder to use null characters (`\x00`) which won't be matched by any markdown formatting patterns.

```typescript
// Before (broken)
return `__CODEBLOCK_${codeBlocks.length - 1}__`;

// After (fixed)
return `\x00CODEBLOCK${codeBlocks.length - 1}\x00`;
```

## Test Files

Three test files were created to validate the fixes:

1. **test-newlines.js** - Tests newline preservation
2. **test-literal-newlines.js** - Tests literal `\n` to actual newline conversion
3. **test-user-exact-input.js** - Tests with real user input containing literal `\n`

All tests pass ✅

## Changes Made

**File**: `src/converter.ts`

1. Added literal `\n` to actual newline conversion (line 21)
2. Changed code block placeholder from `__CODEBLOCK_N__` to `\x00CODEBLOCKN\x00` (line 31)
3. Updated code block restoration to use new placeholder (line 105)

## Impact

- ✅ Users can now paste text with literal `\n` and it will render properly
- ✅ Code blocks now display correctly as monospace Unicode text
- ✅ All existing tests continue to pass
- ✅ No breaking changes to the API

## Build Status

```bash
pnpm build  # ✅ Success
pnpm test   # ✅ All tests pass
```

