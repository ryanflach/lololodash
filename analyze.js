// include the Lo-Dash library
var _ = require("lodash");

var performers = function(collection){
  var average = _.reduce(collection, function(sum, individual){
    return sum + individual.income;
  }, 0) / collection.length;

  var output = {
    average: average,
    underperform: [],
    overperform: []
  }

  collection = _.sortBy(collection, 'income');

  _.filter(collection, function(individual){
    if (individual.income > average) {
      output.overperform.push(individual);
    } else {
      output.underperform.push(individual);
    }
  });

  return output;
};


// export the function as a nodejs module
module.exports = performers;
