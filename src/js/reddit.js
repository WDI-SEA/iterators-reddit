var reddit = require('../data.json');

// Write your solutions below

console.log(reddit.data);

// forEach - console.log all post titles

var array = reddit.data.children;

array.forEach(function(element) {
  console.log(element.data.title);
});

//  map - Print an array of permalinks, append http://reddit.com
//  to each so that they contain full http:// path to reddit

array.map(function(element) {
  console.log('http://reddit.com' + element.data.permalink);
  return ('http://reddit.com' + element.data.permalink);
});

//  filter - Filter the posts that contain actual text in the selftext key

var filteredArray = array.filter(function(element) {
  return (element.data.selftext);
});

console.log(filteredArray);

//  reduce - Use reduce to obtain the sum of all the score values
//  across all posts in the dataset

//  Option 1

var scores = [];

array.forEach(function(element) {
  scores.push(element.data.score);
});

console.log(scores);

var total = scores.reduce(function(a, b) {
  return (a + b);
});

console.log(total);

//  Option 2

var newArray = array.reduce(function(a, b) {
  return (a + b.data.score);
}, 0);

console.log(newArray);
