var reddit = require('../data.json');

// Write your solutions below

// var sum = reddit.data.children.reduce(function(total, post, idx) {
//   return total + post.data.score;
// });

// console.log(sum);


// 1. forEach - console.log all post titles
// 2. map - Print an array of permalinks, append http://reddit.com to each so that they contain 
//	full http:// path to reddit
// 3. filter - Filter the posts that contain actual text in the selftext key
// 4. reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset


// SOLUTION #1:

// reddit.data.children.forEach(function (item) {
// 	console.log("Title: " + item.data.title);
// });


// SOLUTION #2:

// var newLinks = reddit.data.children.map(function (item) {
// 	return "Updated permalink:  http://reddit.com" + item.data.permalink;
// });

// console.log(newLinks);





// SOLUTION #3: 


// var hasValue = reddit.data.children.filter(function (item) {
// 	return item.data.selftext.length > 0;
// });

// hasValue.forEach(function (item) {
// 	console.log("Title:    " + item.data.title);
// });




// SOLUTION #4: 

var scores = [];

reddit.data.children.forEach(function (item) {
	scores.push(item.data.score);
});

var add = function (a, b) {
  return a + b;
};

var sum = scores.reduce(add);

console.log(sum);

