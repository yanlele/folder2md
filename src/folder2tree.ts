import {JSDOM} from 'jsdom';

const dom: Document = new JSDOM('').window.document;

class Folder2Tree {
  static arr2obj(arr) {
    const obj = {};
    for (let i = 0, len = arr.length; i < len; i++) {
      const em = arr[i];
      if (typeof (em) === "string" || typeof (em) === "number") {
        obj[em] = em;
      } else if (typeof (em) === "object") {
        for (const key in em) {
          obj[key] = this.arr2obj(em[key]);
        }
      }
    }
    return obj;
  }

  static getObjLen(obj) {
    let count = 0;
    for (const em in obj) {
      count++;
    }
    return count;
  }

  static getTree(data) {
    const result = this.createDiv();
    const all = this.show(data, '');
    for (let i = 0; i < all.length; i++) {
      result.appendChild(all[i]);
    }
    return result;
  }

  static show(data, content) {
    let all = [];
    const len = this.getObjLen(data);
    let count = 1;

    for (const i in data) {
      let front = content;
      const isLast = (count === len);
      front += isLast ? '&emsp;&nbsp;&nbsp;' : '│&emsp;';
      if (typeof data[i] === 'string' || typeof data[i] === 'number') {
        all.push(this.createDiv(i, data[i], content, isLast));
      } else if (typeof data[i] === "object") {
        all.push(this.createDiv(i, i, content, isLast));
        const arr = this.show(data[i], front);
        const parent = this.createDiv(i, '', content, isLast);
        for (const j in arr) {
          parent.appendChild(arr[j]);
        }
        all = all.concat(parent);
      } else {
        continue;
      }
      count++;
    }
    return all;
  }

  static createDiv(key = '', value = '', front = '', isLast = false) {
    const div = dom.createElement('div');
    if (key !== '') {
      div.setAttribute('data-key', key);
    }
    if (value !== '') {
      const content = isLast ? '└─' : '├─';
      div.innerHTML = front + content + value;
    }
    return div;
  }

  /**
   * 初始化方法
   *
   * @param {Dom} ctn 父级dom节点
   * @param {Object} data 描述文件夹层级关系对象
   */
  static init(ctn, data) {
    ctn = ctn || dom.getElementsByTagName("body")[0];
    if (data) {
      if (data instanceof Array) {
        data = this.arr2obj(data);
      }
      ctn.appendChild(this.getTree(data));
    } else {
      console.log("data is null");
    }
    return ctn;
  }
}

export default Folder2Tree;
