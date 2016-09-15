// 1. `forEach` -  `console.log` all post titles
// 2. `map` - Print an array of permalinks, append `http://reddit.com` to each so that they contain full `http://` path to reddit
// 3. `filter` - Filter the posts that contain actual text in the `selftext` key
// 4. `reduce` - Use reduce to obtain the sum of all the `score` values across all posts in the dataset

var reddit = require('../data.json');
var data = reddit.data.children;


//NEED
//titles
//permalinks
//selftext
//score vals

// Write your solutions below

var sum = reddit.data.children.reduce(function(total, post, idx) {
  return total + post.data.score;
});

console.log(sum);

// Q. 1 'forEach'
console.log("QUESTION ONE");
data.forEach(function(item){
	var title = item.data.title;
	console.log(title);
})
console.log("");

//Q. 2 'map'
console.log("QUESTION TWO");
var permalinks = [];
data.forEach(function(item){
	var permalink = item.data.permalink;
	permalinks.push(permalink);
})

var appendedPermalinks = permalinks.map(function(item){
	return "http://reddit.com" + item;
});
console.log(appendedPermalinks);
console.log("");

// Q. 3 'filter'
console.log("QUESTION THREE");
var posts = [];

data.forEach(function(item){
	posts.push(item.data);
})
var filter = function(item){
	if (item.selftext) {
		return item;
	}
}

var filteredPosts = posts.filter(filter);
filteredPosts.forEach(function(item) {
	console.log(item.title);
});
console.log("");

// Q. 4 'reduce'
console.log("QUESTION 4")
var scores = [];
data.forEach(function(item){
	scores.push(item.data.score);
})
var sum = function(a, b) {
	return a + b;
}

var sumOfScores = scores.reduce(sum);
console.log(sumOfScores);




