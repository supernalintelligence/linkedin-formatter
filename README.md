# @supernal-social/linkedin-formatter

**Framework-agnostic Markdown to LinkedIn formatter** with pure algorithms, optional React hooks, and copy-paste widgets.

## 🎯 Design Philosophy

This package is designed for **maximum reusability**:

1. **Pure algorithms** - No framework dependencies in core
2. **Optional React hooks** - Use in any React framework
3. **Copy-paste widgets** - Ready-made components you can customize
4. **Zero config** - Works out of the box

## 📦 Installation

```bash
npm install @supernal-social/linkedin-formatter
# or
pnpm add @supernal-social/linkedin-formatter
# or
yarn add @supernal-social/linkedin-formatter
```

## 🚀 Quick Start

### 1. Pure JavaScript (Works Anywhere)

```javascript
// Node.js, browser, any framework
import { markdownToLinkedIn } from '@supernal-social/linkedin-formatter';

const formatted = markdownToLinkedIn('**Hello LinkedIn!**');
console.log(formatted); // 𝐇𝐞𝐥𝐥𝐨 𝐋𝐢𝐧𝐤𝐞𝐝𝐈𝐧!
```

### 2. React Hook (Any React Framework)

```tsx
import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';

function MyComponent() {
  const { formatted, convert, copyToClipboard, charCount } = useLinkedInFormatter();
  
  return (
    <div>
      <textarea onChange={(e) => convert(e.target.value)} />
      <pre>{formatted}</pre>
      <button onClick={copyToClipboard}>Copy</button>
      <span>{charCount.remaining} chars remaining</span>
    </div>
  );
}
```

### 3. Ready-Made Widget (Drop In)

```tsx
import LinkedInFormatter from '@supernal-social/linkedin-formatter/widgets';

export default function Page() {
  return <LinkedInFormatter />;
}
```

## 📚 Usage Patterns

### Pattern 1: Pure Algorithm (Framework-Agnostic)

**Best for:** Integrating into existing systems, CLI tools, serverless functions

```typescript
import { 
  markdownToLinkedIn, 
  getCharacterCount, 
  checkAccessibility,
  getPlainText 
} from '@supernal-social/linkedin-formatter';

// Convert
const formatted = markdownToLinkedIn('**Bold** and *italic*');

// Check character count
const count = getCharacterCount(formatted);
if (count.exceedsLimit) {
  console.warn(`Exceeds limit by ${Math.abs(count.remaining)} chars`);
}

// Check accessibility
const accessibility = checkAccessibility(formatted);
console.log(`Warnings: ${accessibility.warnings.length}`);

// Get plain text (strip Unicode)
const plain = getPlainText(formatted);
```

### Pattern 2: React Hook (Custom UI)

**Best for:** Building your own UI with full control

```tsx
import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';

function CustomFormatter() {
  const {
    formatted,
    plainText,
    charCount,
    accessibility,
    convert,
    copyToClipboard,
    clear,
  } = useLinkedInFormatter();

  return (
    <YourCustomUI
      onInputChange={convert}
      output={formatted}
      onCopy={copyToClipboard}
      stats={charCount}
      warnings={accessibility.warnings}
    />
  );
}
```

### Pattern 3: Copy-Paste Widget (Fastest)

**Best for:** Quick implementation, prototyping, tools pages

```tsx
// Option A: Use pre-built widget
import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets';

export default function Page() {
  return <BasicFormatter />;
}

// Option B: Copy widget file and customize
// Copy: node_modules/@supernal-social/linkedin-formatter/src/widgets/basic.tsx
// To: your-project/components/LinkedInFormatter.tsx
// Customize to your needs!
```

## 🎨 Available Widgets

| Widget | Size | Features | Use Case |
|--------|------|----------|----------|
| **Minimal** | 50 LOC | Input/Output only | Integration into existing UI |
| **Basic** | 150 LOC | + Copy + Counter | Quick tools page |
| **NextJs** | 200 LOC | + Examples + Stats | Full Next.js page |

### Minimal Widget (50 lines)

```tsx
import { MinimalFormatter } from '@supernal-social/linkedin-formatter/widgets';
// Pure input/output, no styling
```

### Basic Widget (150 lines)

```tsx
import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets';
// Two-panel layout, copy button, character counter, Tailwind CSS
```

### Next.js Widget (200 lines)

```tsx
import { NextJsFormatterPage } from '@supernal-social/linkedin-formatter/widgets';
// Full-featured with examples, stats, warnings, responsive design
```

## 🔧 Integration Examples

### In Next.js App Router

```typescript
// app/tools/linkedin-formatter/page.tsx
import { NextJsFormatterPage } from '@supernal-social/linkedin-formatter/widgets';

export default function LinkedInFormatterPage() {
  return <NextJsFormatterPage />;
}

export const metadata = {
  title: 'LinkedIn Formatter',
  description: 'Convert Markdown to LinkedIn text'
};
```

### In Next.js Pages Router

```typescript
// pages/tools/linkedin-formatter.tsx
import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets';

export default function LinkedInFormatterPage() {
  return (
    <div className="container mx-auto py-12">
      <BasicFormatter />
    </div>
  );
}
```

### In Existing Dashboard

```tsx
// In your existing dashboard component
import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';

export function DashboardSection() {
  const { formatted, convert } = useLinkedInFormatter();
  
  return (
    <YourExistingLayout>
      <YourExistingInput onChange={(text) => convert(text)} />
      <YourExistingOutput value={formatted} />
    </YourExistingLayout>
  );
}
```

### As Standalone API

```typescript
// API route or serverless function
import { markdownToLinkedIn } from '@supernal-social/linkedin-formatter';

export async function POST(req: Request) {
  const { markdown } = await req.json();
  const formatted = markdownToLinkedIn(markdown);
  return Response.json({ formatted });
}
```

## 📖 API Reference

### Core Functions

#### `markdownToLinkedIn(markdown: string, options?: ConversionOptions): string`

Convert Markdown to LinkedIn-formatted text.

```typescript
const formatted = markdownToLinkedIn('**Bold** text', {
  preserveLinks: true,      // Keep URLs in links
  bulletStyle: '•',         // Bullet character
  headingStyle: 'both',     // 'bold' | 'uppercase' | 'both'
  codeBlockStyle: 'monospace' // 'monospace' | 'backticks'
});
```

#### `getCharacterCount(text: string): CharacterCountInfo`

Get detailed character count information.

```typescript
const count = getCharacterCount(formatted);
// {
//   total: 150,
//   plain: 145,
//   unicode: 20,
//   linkedInLimit: 3000,
//   remaining: 2850,
//   exceedsLimit: false
// }
```

#### `checkAccessibility(text: string): AccessibilityReport`

Check for accessibility issues.

```typescript
const accessibility = checkAccessibility(formatted);
// {
//   hasUnicodeFormatting: true,
//   unicodeCharCount: 20,
//   plainTextLength: 145,
//   unicodePercentage: 13.3,
//   warnings: ['Screen readers may not...', ...]
// }
```

#### `getPlainText(formatted: string): string`

Strip all Unicode formatting.

```typescript
const plain = getPlainText('𝐁𝐨𝐥𝐝');
// 'Bold'
```

### React Hooks

#### `useLinkedInFormatter(initialMarkdown?: string, defaultOptions?: ConversionOptions)`

Complete hook with state management.

```typescript
const {
  formatted,        // Formatted output
  plainText,        // Plain text version
  accessibility,    // Accessibility report
  charCount,        // Character count info
  convert,          // (markdown, options?) => void
  copyToClipboard,  // () => Promise<void>
  copyPlainToClipboard, // () => Promise<void>
  clear,            // () => void
} = useLinkedInFormatter();
```

#### `useLinkedInConvert(markdown: string, options?: ConversionOptions): string`

Simple stateless conversion.

```typescript
const [text, setText] = useState('');
const formatted = useLinkedInConvert(text);
```

## 🎯 Supported Markdown

| Syntax | Example | Output |
|--------|---------|--------|
| Bold | `**text**` | 𝐛𝐨𝐥𝐝 |
| Italic | `*text*` | 𝑖𝑡𝑎𝑙𝑖𝑐 |
| Code | `` `text` `` | 𝚌𝚘𝚍𝚎 |
| Strikethrough | `~~text~~` | t̶e̶x̶t̶ |
| Heading | `# Title` | 𝐓𝐈𝐓𝐋𝐄 |
| List | `- item` | • item |
| Link | `[text](url)` | text (url) |
| Code Block | ` ```code``` ` | 𝚌𝚘𝚍𝚎 𝚋𝚕𝚘𝚌𝚔 |

## 🏗️ Package Structure

```
@supernal-social/linkedin-formatter/
├── index                 # Core algorithms (no dependencies)
├── react                 # React hooks (optional)
└── widgets               # Ready-made components (copy-paste)
```

### Import Paths

```typescript
// Core (works anywhere)
import { markdownToLinkedIn } from '@supernal-social/linkedin-formatter';

// React hooks (any React framework)
import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';

// Widgets (ready-made components)
import LinkedInFormatter from '@supernal-social/linkedin-formatter/widgets';
import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets';
import { MinimalFormatter } from '@supernal-social/linkedin-formatter/widgets';
import { NextJsFormatterPage } from '@supernal-social/linkedin-formatter/widgets';
```

## 🎨 Customization

### Customize a Widget

1. Copy the widget file you want
2. Modify to match your design system
3. Use it as your own component

```bash
# Copy basic widget
cp node_modules/@supernal-social/linkedin-formatter/src/widgets/basic.tsx \
   src/components/MyLinkedInFormatter.tsx

# Customize and use
import MyLinkedInFormatter from '@/components/MyLinkedInFormatter';
```

### Build Your Own Widget

```tsx
import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';

export function MyCustomWidget() {
  const { formatted, convert, charCount } = useLinkedInFormatter();
  
  // Your custom UI with your design system
  return <YourCustomDesign />;
}
```

## ⚠️ Accessibility

The package includes built-in accessibility checking:

```typescript
const { warnings } = checkAccessibility(formatted);
// [
//   'Screen readers may not properly read Unicode-styled text',
//   'Search engines may not index styled text properly',
//   ...
// ]
```

**Best Practices:**
- Use formatting sparingly (< 30% of text)
- Provide plain text alternative
- Don't format critical information (names, dates)
- Include accessibility warnings in your UI

## 🧪 Testing

```bash
cd node_modules/@supernal-social/linkedin-formatter
node test.js
```

## 📄 License

MIT - Free to use, modify, and distribute

## 🤝 Contributing

This package is designed to be forked and customized. Feel free to:
- Copy widgets and modify them
- Build new widgets on top of the hooks
- Extend the core algorithms
- Create integrations for other frameworks

## 📚 Examples

See `src/widgets/` for complete, working examples that you can copy and customize.

---

Made with ❤️ by [Supernal Intelligence](https://supernal.ai)

**Links:**
- 🌐 [Supernal.ai](https://supernal.ai)
- 📦 [NPM Package](https://npmjs.com/package/@supernal-social/linkedin-formatter)
- 🔧 [GitHub Repository](https://github.com/supernalintelligence/supernal-nova)
- 🎯 [Live Demo](https://linkedin-formatter.supernal.ai)
- 📚 [Documentation](https://github.com/supernalintelligence/supernal-nova/tree/main/families/supernal-social/packages/@supernal-social/linkedin-formatter)
