'use client';

/**
 * MINIMAL LINKEDIN FORMATTER
 * 
 * Pure algorithm usage - 50 lines
 * No styling, no dependencies beyond the core package
 * Perfect for integrating into your existing UI
 * 
 * Usage:
 * ```tsx
 * import { MinimalFormatter } from '@supernal-social/linkedin-formatter/widgets';
 * // or copy this file directly
 * ```
 */

import * as React from 'react';
import { useState } from 'react';
import { markdownToLinkedIn } from '../converter';

export function MinimalFormatter() {
  const [markdown, setMarkdown] = useState('');
  const formatted = markdownToLinkedIn(markdown);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formatted);
    alert('Copied!');
  };

  return (
    <div>
      <div>
        <label>Markdown Input:</label>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={10}
          cols={50}
        />
      </div>

      <div>
        <label>LinkedIn Output:</label>
        <pre>{formatted}</pre>
      </div>

      <button onClick={handleCopy} disabled={!formatted}>
        Copy to Clipboard
      </button>
    </div>
  );
}

export default MinimalFormatter;

