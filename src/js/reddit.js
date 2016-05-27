var reddit = require('../data.json');

// Write your solutions below
//console.log(reddit.data);

// var allTitles = reddit.data.children.forEach(function(element, idx) {
//   console.log(reddit.data.children[idx].data.title);
// });

// console.log(allTitles);

// var prmlinks = reddit.data.children.map(function(element, idx) {
//   return ('http://www.reddit.com' + element.data.permalink);
// })

// console.log(prmlinks);

// var filt = reddit.data.children.filter(function(element, idx) {
//   console.log(element.data.selftext)
// });

// console.log(filt);

var runningTotal = 0;

var reducer = reddit.data.children.reduce(function(a, b, c, d) {
  return a + (b.data.score);
}, runningTotal);

console.log(reducer);


