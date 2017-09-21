import fs from 'fs';
import jsdom from 'jsdom';
import { LocalStorage } from 'node-localstorage';

const dir = './build';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const document = jsdom.jsdom('');
global.document = document;
global.window = document.defaultView;
global.window.localStorage = new LocalStorage('./build/localStorageTemp');
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.API_BASE = '/v1';
