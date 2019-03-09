"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const dom = new jsdom_1.JSDOM(`<p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);
//# sourceMappingURL=test.js.map