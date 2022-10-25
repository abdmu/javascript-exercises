const ftoc = function(temp) {
  return roun(((temp - 32) * (5/9)));
};

const ctof = function(temp) {
  return roun(((temp * (9/5)) + 32));
};

function roun(x){
  x = Math.round(x * 10);
  return (x / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
