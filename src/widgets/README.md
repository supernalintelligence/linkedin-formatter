# LinkedIn Formatter - Copy-Paste Widgets

## Purpose

This directory contains **complete, ready-to-use widgets** that you can copy directly into your project. Each widget is self-contained and requires minimal setup.

## Available Widgets

### 1. Minimal Input/Output (50 lines)
**File:** `minimal.tsx`
- Pure algorithm usage
- No styling
- Works anywhere

### 2. Basic Formatter (150 lines)
**File:** `basic.tsx`
- Simple two-panel layout
- Copy button
- Character counter
- Tailwind CSS

### 3. Full Featured (300 lines)
**File:** `full.tsx`
- Complete UI
- Examples
- Accessibility warnings
- Stats dashboard
- Tailwind CSS

### 4. Next.js Page Component (200 lines)
**File:** `nextjs-page.tsx`
- Drop into Next.js app
- Uses App Router
- Server/Client components
- Ready to deploy

### 5. Embeddable Widget (180 lines)
**File:** `embed.tsx`
- Minimal footprint
- Shadow DOM isolation
- Standalone CSS
- Works in any site

## How to Use

### Option 1: Copy Single File

```bash
# Copy the widget you want
cp widgets/basic.tsx your-project/components/LinkedInFormatter.tsx

# Install dependencies
npm install @supernal-social/linkedin-formatter
```

### Option 2: Import from Package

```typescript
import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets';

export default function Page() {
  return <BasicFormatter />;
}
```

### Option 3: Customize

All widgets are intentionally simple and well-commented. Copy and modify to match your needs.

## Integration Examples

### In Next.js App Router

```typescript
// app/tools/linkedin-formatter/page.tsx
import { NextJsFormatter } from '@supernal-social/linkedin-formatter/widgets';

export default function LinkedInFormatterPage() {
  return <NextJsFormatter />;
}
```

### In Next.js Pages Router

```typescript
// pages/tools/linkedin-formatter.tsx
import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets';

export default function LinkedInFormatterPage() {
  return <BasicFormatter />;
}
```

### In React Component

```typescript
// components/LinkedInFormatter.tsx
import { FullFormatter } from '@supernal-social/linkedin-formatter/widgets';

export function LinkedInFormatter() {
  return <FullFormatter />;
}
```

### As Standalone Tool

```typescript
// tools/linkedin/page.tsx
import { EmbeddableWidget } from '@supernal-social/linkedin-formatter/widgets';

export default function Page() {
  return (
    <div className="container">
      <h1>LinkedIn Post Formatter</h1>
      <EmbeddableWidget />
    </div>
  );
}
```

## Customization

Each widget is designed to be customized:

```typescript
// Copy the widget file and modify
import { useLinkedInFormatter } from '@supernal-social/linkedin-formatter/react';

export function MyCustomFormatter() {
  const { formatted, convert, copyToClipboard } = useLinkedInFormatter();
  
  // Your custom UI
  return (
    <div className="my-custom-style">
      {/* Your markup */}
    </div>
  );
}
```

## Styling

**Tailwind CSS:** Most widgets use Tailwind
**Custom CSS:** Easy to swap out classes
**CSS Modules:** Widgets support CSS modules
**Styled Components:** Compatible with CSS-in-JS

## Features by Widget

| Widget | Size | Features | Best For |
|--------|------|----------|----------|
| Minimal | 50 LOC | Input/Output only | Integration into existing UI |
| Basic | 150 LOC | + Copy + Counter | Quick tools page |
| Full | 300 LOC | + Examples + Warnings | Standalone tool |
| Next.js | 200 LOC | + Server Components | Next.js apps |
| Embed | 180 LOC | + Shadow DOM | External sites |

## Dependencies

**Core:** Only `@supernal-social/linkedin-formatter`
**Optional:** `react`, `react-dom` (peerDependencies)
**Styling:** Tailwind CSS (easily replaceable)

## Examples in This Repo

See the widgets in action:
- **Dev server:** http://localhost:3456/ (Vite version)
- **Next.js version:** Coming in social-dashboard integration

## Next Steps

1. Choose a widget that fits your needs
2. Copy it into your project
3. Customize styling to match your design
4. Add additional features as needed

All widgets are MIT licensed and free to use/modify.

