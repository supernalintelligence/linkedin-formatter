"use strict";
/**
 * Widget exports
 *
 * Usage: import { BasicFormatter } from '@supernal-social/linkedin-formatter/widgets'
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.NextJsFormatterPage = exports.BasicFormatter = exports.MinimalFormatter = void 0;
var minimal_1 = require("./minimal");
Object.defineProperty(exports, "MinimalFormatter", { enumerable: true, get: function () { return minimal_1.MinimalFormatter; } });
var basic_1 = require("./basic");
Object.defineProperty(exports, "BasicFormatter", { enumerable: true, get: function () { return basic_1.BasicFormatter; } });
var nextjs_page_1 = require("./nextjs-page");
Object.defineProperty(exports, "NextJsFormatterPage", { enumerable: true, get: function () { return nextjs_page_1.NextJsFormatterPage; } });
// Default export for simplest usage
var basic_2 = require("./basic");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return basic_2.BasicFormatter; } });
//# sourceMappingURL=index.js.map