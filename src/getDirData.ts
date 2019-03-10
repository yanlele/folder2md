import {readdirSync, statSync, Dirent} from 'fs-extra';
import * as path from 'path';

/*获取路径数据*/
const dir: string = path.resolve(__dirname, '../');

const dirNames: string[] = readdirSync(dir);
if (dirNames.length) {
  dirNames.forEach((item: string) => {
    statSync(path.resolve(dir, item)).isFile()
  });
}

