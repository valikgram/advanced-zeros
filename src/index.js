module.exports = function getZerosCount(number, base) {
  var raz = Number.MAX_VALUE;
  var j = base;
  for (var i = 2; i <= base; i++) {
    if (j % i === 0) {
      var p = 0;
      while (j % i === 0) {
         j = j / i;     
         p++;
      }
      var c = 0;
      var z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      raz = Math.min(raz, Math.floor(c / p))
    }
  }
  return raz;
}