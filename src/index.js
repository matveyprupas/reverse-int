module.exports = function reverse (n) {
  let res = parseFloat(n.toString().split('').reverse().join(''));
  return res;
}