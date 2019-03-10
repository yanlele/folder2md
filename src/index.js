"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const folder2tree_1 = require("./folder2tree");
const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, 'output.md');
const container = new jsdom_1.JSDOM('<div id="container"></div>').window.document;
const folderDom = folder2tree_1.default.init(container.querySelector('#container'), [
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
        ],
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
]);
fs.writeFile(filename, folderDom.innerHTML, { flag: 'a' }, err => {
    if (err)
        console.log(err);
    console.log('生成文件成功');
});
//# sourceMappingURL=index.js.map
