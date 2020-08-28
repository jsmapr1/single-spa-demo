const cache = {};

export function getSavedData() {
  if(cache.saved) {
    console.log('returning saved data');
    return cache.saved;
  }
  console.log('setting data');
  cache.saved = 'Saved Data';
  return cache.saved;
}

export function setSavedData(data) {
  cache.saved = data
}
