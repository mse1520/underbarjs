const _reduceC = require('./_reduceC.js');

function _objectC(list, values) {
  return arguments.length > 1 ? _reduceC(list, (object, key, index) => (object[key] = values[index], object), {}) : _reduceC(list, (object, [key, value]) => (object[key] = value, object), {});
}

module.exports = _objectC;