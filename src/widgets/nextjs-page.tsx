'use client';

/**
 * NEXT.JS PAGE COMPONENT
 * 
 * Ready-to-use Next.js App Router page - 200 lines
 * Drop this into app/tools/linkedin-formatter/page.tsx
 * 
 * Features:
 * - Server/Client component split
 * - Metadata for SEO
 * - Responsive design
 * - Example templates
 * 
 * Usage:
 * 1. Copy to: app/tools/linkedin-formatter/page.tsx
 * 2. Install: @supernal-social/linkedin-formatter
 * 3. Done!
 */

import * as React from 'react';
import { useLinkedInFormatter } from '../react/hooks';

const EXAMPLES = {
  basic: `# Welcome to LinkedIn Formatter\n\nThis is **bold** and this is *italic*.`,
  announcement: `# 🚀 Exciting News!\n\nI'm thrilled to announce **our product** hit *1 million users*!\n\n## Key Achievements\n- 200% growth in Q1\n- Featured in TechCrunch\n- New enterprise clients\n\nCheck it out: [Visit Site](https://example.com)`,
  technical: `## New Feature Release\n\nWe've shipped \`v2.0\` with major improvements:\n\n\`\`\`javascript\nconst result = await api.fetch();\nconsole.log(result);\n\`\`\`\n\n- **Performance:** 3x faster\n- **Security:** Enhanced encryption\n- **UX:** Redesigned dashboard`,
};

export function NextJsFormatterPage() {
  const {
    formatted,
    plainText,
    charCount,
    accessibility,
    convert,
    copyToClipboard,
    copyPlainToClipboard,
    clear,
  } = useLinkedInFormatter();

  const [markdown, setMarkdown] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    convert(markdown);
  }, [markdown, convert]);

  const handleCopy = async () => {
    await copyToClipboard();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = (key: keyof typeof EXAMPLES) => {
    setMarkdown(EXAMPLES[key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            LinkedIn Formatter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert Markdown to LinkedIn-formatted text using Unicode characters. 
            No storage, no tracking, 100% client-side.
          </p>
        </header>

        {/* Example templates */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Start Templates:
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => loadExample('basic')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              Basic Formatting
            </button>
            <button
              onClick={() => loadExample('announcement')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              Announcement
            </button>
            <button
              onClick={() => loadExample('technical')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              Technical Post
            </button>
          </div>
        </div>

        {/* Main editor */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-gray-900">
                  📝 Markdown Input
                </label>
                <button
                  onClick={clear}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Type or paste your Markdown here..."
                className="w-full h-96 p-4 border-2 border-gray-200 rounded-lg font-mono text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Output */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                ✨ LinkedIn Output
              </label>
              <div className="w-full h-96 p-4 border-2 border-gray-200 rounded-lg bg-gray-50 overflow-y-auto whitespace-pre-wrap">
                {formatted || (
                  <span className="text-gray-400">
                    Your formatted text will appear here...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={handleCopy}
              disabled={!formatted}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl"
            >
              {copied ? '✓ Copied!' : '📋 Copy Formatted'}
            </button>
            <button
              onClick={copyPlainToClipboard}
              disabled={!formatted}
              className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              📄 Copy Plain Text
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Characters</div>
            <div className={`text-2xl font-bold ${charCount.exceedsLimit ? 'text-red-600' : 'text-gray-900'}`}>
              {charCount.total}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Remaining</div>
            <div className={`text-2xl font-bold ${charCount.remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {charCount.remaining}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Unicode %</div>
            <div className="text-2xl font-bold text-gray-900">
              {accessibility.unicodePercentage.toFixed(0)}%
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Warnings</div>
            <div className="text-2xl font-bold text-gray-900">
              {accessibility.warnings.length}
            </div>
          </div>
        </div>

        {/* Accessibility warnings */}
        {accessibility.warnings.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
            <h4 className="font-semibold text-yellow-900 mb-2">
              ⚠️ Accessibility Considerations
            </h4>
            <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
              {accessibility.warnings.map((warning, i) => (
                <li key={i}>{warning}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer info */}
        <div className="text-center text-gray-600 text-sm">
          <p>
            This tool converts Markdown to Unicode Mathematical Alphanumeric Symbols.
            All processing happens in your browser - no data is stored or sent anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NextJsFormatterPage;

// Metadata for Next.js (add this to a separate metadata.ts if using App Router)
export const metadata = {
  title: 'LinkedIn Formatter | Convert Markdown to LinkedIn Text',
  description: 'Free online tool to convert Markdown to LinkedIn-formatted text using Unicode characters. No signup, no tracking, 100% client-side.',
  keywords: ['linkedin', 'markdown', 'formatter', 'unicode', 'social media', 'text formatting'],
};

