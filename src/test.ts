import { readdirSync } from 'fs-extra';
import * as path from 'path';

console.log(readdirSync(path.resolve(__dirname)));
