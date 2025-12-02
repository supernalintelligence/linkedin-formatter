"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.NextJsFormatterPage = NextJsFormatterPage;
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
const React = __importStar(require("react"));
const hooks_1 = require("../react/hooks");
const EXAMPLES = {
    basic: `# Welcome to LinkedIn Formatter\n\nThis is **bold** and this is *italic*.`,
    announcement: `# 🚀 Exciting News!\n\nI'm thrilled to announce **our product** hit *1 million users*!\n\n## Key Achievements\n- 200% growth in Q1\n- Featured in TechCrunch\n- New enterprise clients\n\nCheck it out: [Visit Site](https://example.com)`,
    technical: `## New Feature Release\n\nWe've shipped \`v2.0\` with major improvements:\n\n\`\`\`javascript\nconst result = await api.fetch();\nconsole.log(result);\n\`\`\`\n\n- **Performance:** 3x faster\n- **Security:** Enhanced encryption\n- **UX:** Redesigned dashboard`,
};
function NextJsFormatterPage() {
    const { formatted, plainText, charCount, accessibility, convert, copyToClipboard, copyPlainToClipboard, clear, } = (0, hooks_1.useLinkedInFormatter)();
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
    const loadExample = (key) => {
        setMarkdown(EXAMPLES[key]);
    };
    return (React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4" },
        React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("header", { className: "text-center mb-12" },
                React.createElement("h1", { className: "text-5xl font-bold text-gray-900 mb-4" }, "LinkedIn Formatter"),
                React.createElement("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto" }, "Convert Markdown to LinkedIn-formatted text using Unicode characters. No storage, no tracking, 100% client-side.")),
            React.createElement("div", { className: "mb-8 bg-white rounded-lg shadow-sm p-6" },
                React.createElement("h3", { className: "text-lg font-semibold text-gray-900 mb-4" }, "Quick Start Templates:"),
                React.createElement("div", { className: "flex flex-wrap gap-2" },
                    React.createElement("button", { onClick: () => loadExample('basic'), className: "px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition" }, "Basic Formatting"),
                    React.createElement("button", { onClick: () => loadExample('announcement'), className: "px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition" }, "Announcement"),
                    React.createElement("button", { onClick: () => loadExample('technical'), className: "px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition" }, "Technical Post"))),
            React.createElement("div", { className: "bg-white rounded-lg shadow-lg p-8 mb-8" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex justify-between items-center mb-4" },
                            React.createElement("label", { className: "text-lg font-semibold text-gray-900" }, "\uD83D\uDCDD Markdown Input"),
                            React.createElement("button", { onClick: clear, className: "text-sm text-gray-500 hover:text-gray-700" }, "Clear")),
                        React.createElement("textarea", { value: markdown, onChange: (e) => setMarkdown(e.target.value), placeholder: "Type or paste your Markdown here...", className: "w-full h-96 p-4 border-2 border-gray-200 rounded-lg font-mono text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" })),
                    React.createElement("div", null,
                        React.createElement("label", { className: "block text-lg font-semibold text-gray-900 mb-4" }, "\u2728 LinkedIn Output"),
                        React.createElement("div", { className: "w-full h-96 p-4 border-2 border-gray-200 rounded-lg bg-gray-50 overflow-y-auto whitespace-pre-wrap" }, formatted || (React.createElement("span", { className: "text-gray-400" }, "Your formatted text will appear here..."))))),
                React.createElement("div", { className: "mt-8 flex gap-4 justify-center" },
                    React.createElement("button", { onClick: handleCopy, disabled: !formatted, className: "px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl" }, copied ? '✓ Copied!' : '📋 Copy Formatted'),
                    React.createElement("button", { onClick: copyPlainToClipboard, disabled: !formatted, className: "px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition" }, "\uD83D\uDCC4 Copy Plain Text"))),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" },
                React.createElement("div", { className: "bg-white rounded-lg shadow p-4" },
                    React.createElement("div", { className: "text-sm text-gray-600 mb-1" }, "Characters"),
                    React.createElement("div", { className: `text-2xl font-bold ${charCount.exceedsLimit ? 'text-red-600' : 'text-gray-900'}` }, charCount.total)),
                React.createElement("div", { className: "bg-white rounded-lg shadow p-4" },
                    React.createElement("div", { className: "text-sm text-gray-600 mb-1" }, "Remaining"),
                    React.createElement("div", { className: `text-2xl font-bold ${charCount.remaining < 0 ? 'text-red-600' : 'text-green-600'}` }, charCount.remaining)),
                React.createElement("div", { className: "bg-white rounded-lg shadow p-4" },
                    React.createElement("div", { className: "text-sm text-gray-600 mb-1" }, "Unicode %"),
                    React.createElement("div", { className: "text-2xl font-bold text-gray-900" },
                        accessibility.unicodePercentage.toFixed(0),
                        "%")),
                React.createElement("div", { className: "bg-white rounded-lg shadow p-4" },
                    React.createElement("div", { className: "text-sm text-gray-600 mb-1" }, "Warnings"),
                    React.createElement("div", { className: "text-2xl font-bold text-gray-900" }, accessibility.warnings.length))),
            accessibility.warnings.length > 0 && (React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8" },
                React.createElement("h4", { className: "font-semibold text-yellow-900 mb-2" }, "\u26A0\uFE0F Accessibility Considerations"),
                React.createElement("ul", { className: "list-disc list-inside space-y-1 text-yellow-800 text-sm" }, accessibility.warnings.map((warning, i) => (React.createElement("li", { key: i }, warning)))))),
            React.createElement("div", { className: "text-center text-gray-600 text-sm" },
                React.createElement("p", null, "This tool converts Markdown to Unicode Mathematical Alphanumeric Symbols. All processing happens in your browser - no data is stored or sent anywhere.")))));
}
exports.default = NextJsFormatterPage;
// Metadata for Next.js (add this to a separate metadata.ts if using App Router)
exports.metadata = {
    title: 'LinkedIn Formatter | Convert Markdown to LinkedIn Text',
    description: 'Free online tool to convert Markdown to LinkedIn-formatted text using Unicode characters. No signup, no tracking, 100% client-side.',
    keywords: ['linkedin', 'markdown', 'formatter', 'unicode', 'social media', 'text formatting'],
};
//# sourceMappingURL=nextjs-page.js.map