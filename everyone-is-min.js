// include the Lo-Dash library
var _ = require("lodash");

var someWarmth = function(collection) {
  var result = {
      hot: [],
      warm: []
  };

  function checkTemp(temp) {
      return temp > 19;
  }

  _.forEach(collection, function(town, townName) {

      if (_.every(town, checkTemp)) {
          result.hot.push(townName);
      } else if (_.some(town, checkTemp)) {
          result.warm.push(townName);
      }

  });

  return result;
};

// export the function as a nodejs module
module.exports = someWarmth;
