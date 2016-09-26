// include the Lo-Dash library
var _ = require("lodash");

var filterWhere = function(collection){
  return _.filter(collection, { active: true });
}

// export the function as a nodejs module
module.exports = filterWhere;
