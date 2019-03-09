import {JSDOM} from "jsdom";
const process = require('process');

console.log(process.cwd());

const dom: JSDOM = new JSDOM(`<p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

