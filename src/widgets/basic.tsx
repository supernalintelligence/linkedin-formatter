'use client';

/**
 * BASIC LINKEDIN FORMATTER
 * 
 * Simple two-panel layout with Tailwind CSS - 150 lines
 * Includes: Copy button, character counter, basic styling
 * 
 * Copy this file directly into your project and customize!
 * 
 * Dependencies:
 * - @supernal-social/linkedin-formatter
 * - Tailwind CSS (or replace classes with your own)
 */

import * as React from 'react';
import { useState } from 'react';
import { markdownToLinkedIn, getCharacterCount } from '../converter';

export function BasicFormatter() {
  const [markdown, setMarkdown] = useState('');
  const [copied, setCopied] = useState(false);
  
  const formatted = markdownToLinkedIn(markdown);
  const charCount = getCharacterCount(formatted);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          LinkedIn Formatter
        </h1>
        <p className="text-gray-600">
          Convert Markdown to LinkedIn-formatted text
        </p>
      </div>

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Input panel */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Markdown Input
          </label>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your Markdown here..."
            className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Output panel */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn Output
          </label>
          <div className="w-full h-96 p-4 border border-gray-300 rounded-lg bg-gray-50 overflow-y-auto whitespace-pre-wrap">
            {formatted || <span className="text-gray-400">Your formatted text will appear here...</span>}
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="font-medium">Characters:</span>{' '}
            <span className={charCount.exceedsLimit ? 'text-red-600 font-bold' : 'text-gray-700'}>
              {charCount.total}
            </span>{' '}
            / 3000
          </div>
          <div className="text-sm text-gray-600">
            Remaining: {charCount.remaining}
          </div>
        </div>

        <button
          onClick={handleCopy}
          disabled={!formatted}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy to Clipboard'}
        </button>
      </div>

      {/* Warning for exceeding limit */}
      {charCount.exceedsLimit && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">
            ⚠️ Your text exceeds LinkedIn's 3000 character limit by {Math.abs(charCount.remaining)} characters
          </p>
        </div>
      )}
    </div>
  );
}

export default BasicFormatter;

