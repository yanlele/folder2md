"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const folder2tree_1 = require("./folder2tree");
const getDirData_1 = require("./getDirData");
const path = require("path");
const fs_extra_1 = require("fs-extra");
const fs = require('fs');
const filename = path.resolve(__dirname, 'output.md');
const container = new jsdom_1.JSDOM('<div id="container"></div>').window.document;
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
const folderDom = folder2tree_1.default.init(container.querySelector('#container'), getDirData_1.default('/Users/yanle/code/company/marvel-fe/packages/venom-fe/src'));
fs_extra_1.writeFile(filename, folderDom.innerHTML)
    .then(() => console.log('输出成功'))
    .catch(err => console.log(err));
//# sourceMappingURL=index.js.map