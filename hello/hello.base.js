import lodash from 'lodash';

const el = document.createElement('h1');
const words = lodash.padEnd("Hello, World", 15, '!');
const text = document.createTextNode(words);
el.appendChild(text);

document.body.appendChild(el);
