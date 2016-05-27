var reddit = require('../data.json');

// Write your solutions below

// use forEach to get post titles

var forEachResult = reddit.data.children.forEach(function(element) {
  console.log(element.data.title + '\n');
});

console.log('---------------------------------------------------------');

// map - use map to return a new array of CHANGED elements

var mapResult = reddit.data.children.map(function(element) {
  return 'http://reddit.com' + element.data.permalink;
});

console.log('---------------------------------------------------------');

// filter - use filter to return an array then run a for each loop over that

var filterResult = reddit.data.children.filter(function(element) {
  return (element.data.selftext.length > 0);
});
// console.log(filterResult);
var forEachResultofFilterResult = filterResult.forEach(function(element) {
  console.log(element.data.title + '\n');
});

console.log('---------------------------------------------------------');

// reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset
var startingpoint = 0;
var sum = reddit.data.children.reduce(function(total, elementToAddToCount) {
  // returns the running total plus the next element
  return total + elementToAddToCount.data.score;
}, startingpoint);

console.log(sum);

console.log('---------------------------------------------------------');
