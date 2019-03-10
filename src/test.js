"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path = require("path");
fs_extra_1.readFile(path.resolve(__dirname, 'test.ts'), {
    encoding: 'utf8'
})
    .then(file => {
    console.log(typeof file);
    console.log(file.match(/\@([\s|\S]*?)\@/));
})
    .catch(err => console.log(err));
//# sourceMappingURL=test.js.map