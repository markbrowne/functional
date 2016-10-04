function countWords(inputWords) {
  return inputWords.reduce(function(o, v, i) {
    o[v] === undefined ? o[v] = 1 : o[v]++;
    return o;
  }, {});
}

module.exports = countWords
