// Merge a `source` object to a `target` recursively
function mergeDeep(target, source) {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      if (!target[key]) target[key] = {};
      Object.assign(source[key], mergeDeep(target[key], source[key]));
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
}

module.exports = {
  mergeDeep
};
