var reddit = require('../data.json');

// // Write your solutions below

// var sum = reddit.data.children.reduce(function(total, post, idx) {
//   return total + post.data.score;
// });

// console.log(sum);

//Question 1:
//reddit.data.children.data.title
//forEach - console.log all post titles

reddit.data.children.forEach(function(titleName) {
  console.log(titleName.data.title);
});



//Question 2:
//map - Print an array of permalinks, append http://reddit.com to each so that they contain full http:// path to reddit

reddit.data.children.map(function(links){
  console.log("http://reddit.com" + links.data.permalink);
});
//couldn't come up with how to add the results back into an array

//Question 3:
//reddit.data.children.data.selftext
// filter - Filter the posts that contain actual text in the selftext key

var text = reddit.data.children.map(function(isThereSelftext) {
  return (isThereSelftext.data.selftext);
});

var yesText = function(txt) {
  return (txt != " ");
}

var selfTextPresent = text.filter(yesText);
console.log(selfTextPresent);
//couldn't figure this one out

//Question 4:
//reddit.data.children.data.selftext
//reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset

var reduceThis = reddit.data.children.map(function(scr){
  return (scr.data.score);
});

var addThem = function (a, b) {
  return a + b;
};

var sum = reduceThis.reduce(addThem);
console.log(sum)
