var reddit = require('../data.json');

// Write your solutions below


/*
// 1)  forEach - console.log all post titles

var titles = reddit.data.children.forEach(function(element, idx) {

console.log(element.data.title);
});


// 2) map - Print an array of permalinks, append http://reddit.com to
//    each so that they contain full http:// path to reddit
var myArray = [];
var plink = reddit.data.children.map(function(element, idx) {
  myArray.push("http://reddit.com" + element.data.permalink)

});
console.log(myArray)


//filter - Filter the posts that contain actual text in the selftext key



var myArray = reddit.data.children.filter(function(element, idx) {
  if (element.data.selftext != "") {
    return true;
  }


});
console.log(myArray)
*/

// 4) reduce - Use reduce to obtain the sum of all
//    the score values across all posts in the dataset

var initialcount = 0;
var sum = reddit.data.children.reduce(function(element, idx) {
  return element + (idx.data.score);
}, initialcount);

console.log(sum);

