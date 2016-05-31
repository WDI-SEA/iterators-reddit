var reddit = require('../data.json');

var runningTotal = 0;

var forReduceScore = reddit.data.children.reduce(function(count, element) {
return count + (element.data.score);
}, runningTotal);

console.log(forReduceScore);

360
