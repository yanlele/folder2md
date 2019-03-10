import {readdirSync, stat, Dirent, statSync} from 'fs-extra';
import * as path from 'path';
import {Stats} from "fs";
import get = Reflect.get;

/*获取路径数据*/
// base path
const dir: string = path.resolve(__dirname);
const outputDirData = [];
const getDirData = function (dir: string, outputDirData: any[] = []) {
  const dirNames = readdirSync(dir);
  if (dirNames.length) {
    dirNames.forEach((itemPath: string) => {
      const tempPath = path.resolve(dir, itemPath);
      const stats: Stats = statSync(tempPath);
      if (stats.isFile()) {
        outputDirData.push(itemPath)
      } else if (stats.isDirectory()) {
        outputDirData.push({
          [itemPath]: getDirData(tempPath, outputDirData[itemPath])
        });
      }
    });
    return outputDirData;
  }
};

export default getDirData;
// getDirData(dir);
// console.log(JSON.stringify(getDirData('/Users/yanle/code/node/node-index/18年')));
