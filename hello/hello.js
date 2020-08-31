import lodash from 'lodash';

function addElements() {
  const el = document.createElement('h1');
  const words = lodash.padEnd('Hello, World', 15, '!');
  const text = document.createTextNode(words);

  el.setAttribute('id', 'hello');
  el.appendChild(text);

  document.body.appendChild(el);
}

function removeElements() {
  const el = document.querySelector('#hello');

  document.body.removeChild(el);
}

export const bootstrap = () => Promise.resolve();

export function mount() {
  addElements();
  return Promise.resolve();
}

export function unmount() {
  removeElements();
  return Promise.resolve();
}
