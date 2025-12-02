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
exports.MinimalFormatter = MinimalFormatter;
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
const React = __importStar(require("react"));
const react_1 = require("react");
const converter_1 = require("../converter");
function MinimalFormatter() {
    const [markdown, setMarkdown] = (0, react_1.useState)('');
    const formatted = (0, converter_1.markdownToLinkedIn)(markdown);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(formatted);
        alert('Copied!');
    };
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("label", null, "Markdown Input:"),
            React.createElement("textarea", { value: markdown, onChange: (e) => setMarkdown(e.target.value), rows: 10, cols: 50 })),
        React.createElement("div", null,
            React.createElement("label", null, "LinkedIn Output:"),
            React.createElement("pre", null, formatted)),
        React.createElement("button", { onClick: handleCopy, disabled: !formatted }, "Copy to Clipboard")));
}
exports.default = MinimalFormatter;
//# sourceMappingURL=minimal.js.map