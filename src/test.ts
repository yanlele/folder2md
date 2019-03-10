/*
* @fileName: test.ts@
* @fileDescription: 这是一个给我们大家公用的一个组件@
*
* */

import {readFile} from 'fs-extra';
import * as path from 'path';

readFile(path.resolve(__dirname, 'test.ts'), {
  encoding: 'utf8'
})
    .then(file => {
      console.log(typeof file);
      console.log(file.match(/\@([\s|\S]*?)\@/));
    })
    .catch(err => console.log(err));
