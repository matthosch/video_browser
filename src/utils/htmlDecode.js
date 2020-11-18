/**
 * Parses string using the HTML parser and returns the resulting content.
 *
 * Use as a safe alternative to dangerouslySetInnerHTML since script elements are not evaluated during parsing.
 * @param {string} input - input string
 * @return {string} parsed HTML
 */
export function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
