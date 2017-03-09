exports.subtotal =function(items) {
var subtotal = items.reduce(function(acc,item) {
return acc + (item.price * item.count);
},0);
return subtotal;
}