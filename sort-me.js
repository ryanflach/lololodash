// include the Lo-Dash library
var _ = require("lodash");

var sortWhere = function(collection){
  return _.sortBy(collection, 'quantity').reverse();
}

// export the function as a nodejs module
module.exports = sortWhere;
