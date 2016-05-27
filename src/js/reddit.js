var reddit = require('../data.json');


// Obtain the following data by using the four array iterators.
var arrayChild = reddit.data.children;

// 1. forEach - console.log all post titles
console.log(arrayChild);
arrayChild.forEach(function(element) {
  console.log(element.data.title);
});

// 2. map -
// Print an array of permalinks,
// append http://reddit.com to each so that they contain full http:// path to reddit

var newArray2 = arrayChild.map(function(element) {
  return 'http://reddit.com' + element.data.permalink;
});

console.log(newArray2);

// 3. filter -
// Filter the posts that contain actual text in the selftext key

var newArray3 = arrayChild.filter(function(element) {
  return (element.data.selftext);
});

console.log(newArray3);


// 4. reduce -
// Use reduce to obtain the sum of all the score values across all posts in the dataset

// Option 1
var reduceArray = [];
arrayChild.forEach(function(element) {
  reduceArray.push(element.data.score);
});

var resultArray = reduceArray.reduce(function (a, b) {
  return (a + b);
});

console.log(resultArray);

// // Option 2

var newArray4 = arrayChild.reduce(function(a, b) {
  return (a + b.data.score);
}, 0);

console.log(newArray4);

// Existing code
// console.log(reddit.data);
