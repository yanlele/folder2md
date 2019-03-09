import {JSDOM} from 'jsdom'
import folder2tree from './folder2tree';
const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, 'output.md');


const container = new JSDOM('<div id="container"></div>').window.document;
const dom = new JSDOM(`<p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

const folderDom = folder2tree.init(container.querySelector('#container'), [
  {
    "img": [
      "sprite.png",
      "bg.png"
    ]
  },
  {
    "js": [{
      "common": [
        "jquery.js", {
          "highcharts": [{
            "modules": ["exporting.js"]
          },
            "highcharts.js"
          ]
        }
      ]
    }, {
      "index": [
        "mian.js", {
          "modules": ["mod.video.js"]
        }
      ]
    }]
  },
  {
    "css": [
      "base.css",
      "index-main.css",
      "index-video.css"
    ]
  },
  "index.html",
  "favicon.ico"
]);


fs.writeFile(filename, folderDom.innerHTML, {flag: 'a'}, err => {
  if (err) console.log(err);
  console.log('生成文件成功');
});
