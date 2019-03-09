import {JSDOM} from "jsdom";

const dom = new JSDOM(`<p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
