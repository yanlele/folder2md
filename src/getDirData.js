"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path = require("path");
const dir = path.resolve(__dirname);
const outputDirData = [];
const getDirData = function (dir, outputDirData = []) {
    const dirNames = fs_extra_1.readdirSync(dir);
    if (dirNames.length) {
        dirNames.forEach((itemPath) => {
            const tempPath = path.resolve(dir, itemPath);
            const stats = fs_extra_1.statSync(tempPath);
            if (stats.isFile()) {
                outputDirData.push(itemPath);
            }
            else if (stats.isDirectory()) {
                outputDirData.push({
                    [itemPath]: getDirData(tempPath, outputDirData[itemPath])
                });
            }
        });
        return outputDirData;
    }
};
//# sourceMappingURL=getDirData.js.map