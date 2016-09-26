// include the Lo-Dash library
var _ = require("lodash");

var numComments = function(collection){
  return _.chain(collection)
  .groupBy('username')
  .map(function(user, name){
    return { username: name, comment_count: _.size(user)}
  })
  .reverse();
}

// export the function as a nodejs module
module.exports = numComments;
