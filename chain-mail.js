// include the Lo-Dash library
var _ = require("lodash");

var wordModifier = function(collection){
  return _.chain(collection)
  .sort()
  .map(function(word){
    return word.toUpperCase() + 'CHAINED';
  });
}

// export the function as a nodejs module
module.exports = wordModifier;
