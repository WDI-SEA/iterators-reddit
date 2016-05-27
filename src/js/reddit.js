var reddit = require('../data.json');




// Soultion to question 1: forEach - console.log all post titles
// var redditData = reddit.data
// var forEachTitle = redditData.children.forEach(function(element, idx) {
//  console.log(redditData.children[idx].data.title);
//  console.log('index:', idx);
// });


// Soultion to question 2: Map - Print an array of permalinks, append http://reddit.com to each so that they contain full http:// path to reddit
// var redditData = reddit.data
// var forEachLink = redditData.children.map(function(element, idx) {
//  return("http://reddit.com" + redditData.children[idx].data.permalink);
// });
// console.log(forEachLink);

// Soultion to question 3: Filter - Filter the posts that contain actual text in the selftext key

// var redditData = reddit.data
// var forfilterText = redditData.children.filter(function(element, idx) {
//  return(redditData.children[idx].data.selftext);
// });
// console.log(forfilterText);

// Soultion to question 4: reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset

var runningTotal = 0;

var redditData = reddit.data
var forReduceScore = redditData.children.reduce(function(count, element) {
 return count + (element.data.score);
}, runningTotal);

console.log(forReduceScore);

/*
Obtain the following data by using the four array iterators.

 */
