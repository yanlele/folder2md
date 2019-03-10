import {JSDOM} from 'jsdom'
import folder2tree from './folder2tree';
import getDirData from './getDirData';
import * as path from 'path';
import {writeFile} from 'fs-extra';


const fs = require('fs');
const filename = path.resolve(__dirname, 'output.md');


const container = new JSDOM('<div id="container"></div>').window.document;
const testData = [
  {
    "img": [
      "sprite.png",
      "bg.png"
    ]
  },
  {
    "js": [
      {
        "common": [
          "jquery.js", {
            "highcharts": [{
              "modules": ["exporting.js"]
            },
              "highcharts.js"
            ]
          }
        ]
      },
      {
        "index": [
          "mian.js", {
            "modules": ["mod.video.js"]
          }
        ]
      }
    ]
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
];

const folderDom = folder2tree.init(container.querySelector('#container'), getDirData('/Users/yanle/code/company/marvel-fe/packages/venom-fe/src'));


writeFile(filename, folderDom.innerHTML)
    .then(() => console.log('输出成功'))
    .catch(err => console.log(err));
