
/**
 * expose `wordwrap`.
 */

module.exports = wordwrap;

/**
 * the function emulates php's `wordwrap()`.
 *
 * example:
 *
 *          wordwrap('something long', 2, '\n');
 *          // > "so\n"
 *
 * @param {Strng} str
 * @param {number} max
 * @param {string} eol defaulted to `\n`
 * @return {String}
 */

function wordwrap (str, max, eol) {
  return str.length > max
    ? str.match(new RegExp('.{1,' + max + '}', 'g'))
      .join(eol || '\n')
    : str;
}
