const expand = require('brace-expansion')

const sanitise = string => string.replace(/  +/g, ' ').trim()
const minimumWords = minNumWords => string => string.split(/ /).length >= minNumWords

module.exports = function(keywordsString, options) {
  options = Object.assign({minNumWords: 2}, options)
  return String(keywordsString)
    .split('\n')
    .filter(line => line.length > 0)
    .map(expand)
    .reduce((x, y) => x.concat(y), []) // no Array#flatMap :(
    .map(sanitise)
    .filter(minimumWords(options.minNumWords))
    .filter((elem, pos, array) => array.indexOf(elem) === pos) // no Array#uniq :(
}
