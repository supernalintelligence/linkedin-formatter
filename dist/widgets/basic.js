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
exports.BasicFormatter = BasicFormatter;
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
const React = __importStar(require("react"));
const react_1 = require("react");
const converter_1 = require("../converter");
function BasicFormatter() {
    const [markdown, setMarkdown] = (0, react_1.useState)('');
    const [copied, setCopied] = (0, react_1.useState)(false);
    const formatted = (0, converter_1.markdownToLinkedIn)(markdown);
    const charCount = (0, converter_1.getCharacterCount)(formatted);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(formatted);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (React.createElement("div", { className: "max-w-6xl mx-auto p-6" },
        React.createElement("div", { className: "mb-8 text-center" },
            React.createElement("h1", { className: "text-3xl font-bold text-gray-900 mb-2" }, "LinkedIn Formatter"),
            React.createElement("p", { className: "text-gray-600" }, "Convert Markdown to LinkedIn-formatted text")),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" },
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, "Markdown Input"),
                React.createElement("textarea", { value: markdown, onChange: (e) => setMarkdown(e.target.value), placeholder: "Type your Markdown here...", className: "w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, "LinkedIn Output"),
                React.createElement("div", { className: "w-full h-96 p-4 border border-gray-300 rounded-lg bg-gray-50 overflow-y-auto whitespace-pre-wrap" }, formatted || React.createElement("span", { className: "text-gray-400" }, "Your formatted text will appear here...")))),
        React.createElement("div", { className: "flex items-center justify-between bg-gray-100 rounded-lg p-4" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("div", { className: "text-sm" },
                    React.createElement("span", { className: "font-medium" }, "Characters:"),
                    ' ',
                    React.createElement("span", { className: charCount.exceedsLimit ? 'text-red-600 font-bold' : 'text-gray-700' }, charCount.total),
                    ' ',
                    "/ 3000"),
                React.createElement("div", { className: "text-sm text-gray-600" },
                    "Remaining: ",
                    charCount.remaining)),
            React.createElement("button", { onClick: handleCopy, disabled: !formatted, className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors" }, copied ? '✓ Copied!' : 'Copy to Clipboard')),
        charCount.exceedsLimit && (React.createElement("div", { className: "mt-4 p-4 bg-red-50 border border-red-200 rounded-lg" },
            React.createElement("p", { className: "text-red-800 text-sm" },
                "\u26A0\uFE0F Your text exceeds LinkedIn's 3000 character limit by ",
                Math.abs(charCount.remaining),
                " characters")))));
}
exports.default = BasicFormatter;
//# sourceMappingURL=basic.js.map