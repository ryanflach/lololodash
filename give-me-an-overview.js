// include the Lo-Dash library
var _ = require("lodash");

var articleOrders = function(collection){
  var overview = [];
  var total = 0;

  orders = _.groupBy(collection, 'article');

  _.forEach(orders, function(order, key){
    key = parseInt(key);

    if (order.length === 1) {
      total = order[0].quantity;
    } else {
      total = _.reduce(order, function(sum, order){
        return sum + order.quantity;
      }, 0);
    }

    overview.push({
      article: key,
      total_orders: total
    });

  });

  overview = _.sortBy(overview, 'total_orders').reverse();

  return overview;
};

// export the function as a nodejs module
module.exports = articleOrders;
