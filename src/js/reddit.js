var reddit = require('../data.json');

// Answer for #1
/*
reddit.data.children.forEach(function (element, idx) {
  console.log(element.data.title);
});
*/

// Answer for #2
/*
var myArray = [];
var titles = reddit.data.children.map(function (element, idx) {
  myArray.push("http://reddit.com" + element.data.permalink);
});

console.log(myArray)
*/

/*
// Answer for #3
var noSelftext = reddit.data.children.filter(function(element, idx) {
  return(reddit.data.children[idx].data.selftext);
});
console.log(noSelftext);
*/


// Answer for #4
var runningTotal = 0;

var forReduceScore = reddit.data.children.reduce(function(count, element) {
 return count + (element.data.score);
}, runningTotal);

console.log(forReduceScore);
