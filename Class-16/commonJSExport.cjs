function sum(a, b) {
  return a + b;
}

const lang = "Javascript";

// named export
module.exports = {
  sum,
  lang,
};
exports.sum = sum; // default export
// exports.lang = lang;
