const tail = function(arr) {
  if (!arr) {
    return undefined;
  } else if (arr.length > 0) {
    return arr.slice(1);
  } else if (arr.length === 0) {
    return [];
  }
};

module.exports = tail;