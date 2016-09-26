// include the Lo-Dash library
var _ = require("lodash");

var template = function(input){
  var textTemplate = "Hello <%= name %> (logins: <%= login.length %>)";
  return _.template(textTemplate)(input);
}

// export the function as a nodejs module
module.exports = template;
