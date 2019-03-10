"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path = require("path");
const dir = path.resolve(__dirname, '../');
const dirNames = fs_extra_1.readdirSync(dir);
if (dirNames.length) {
    dirNames.forEach((item) => {
        fs_extra_1.statSync(path.resolve(dir, item)).isFile();
    });
}
//# sourceMappingURL=getDirData.js.map