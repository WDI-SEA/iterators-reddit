var reddit = require("./data.json")
// console.log(reddit["data"]);

// Write your solutions below

// forEach - cosole.log all titles
reddit.data.children.forEach(function (titles) {
	console.log(titles.data.title);
});

// map - return an array of permalinks, append http://reddit.com to each so they contain full http:// path to reddit
var permalinks = reddit.data.children.map(function (link) {
	return link.data.permalink;
});

console.log(permalinks);

permalinks.forEach(function (url) {
	console.log("http://reddit.com" + url);
});


// filter the posts that contain actual text in the selftext key
var containsText = reddit.data.children.filter(function (text) {
	return text.data.selftext.length;
});

console.log(containsText);

// use reduce to count all the score values across posts

var count = reddit.data.children.reduce(function (curCount, child) {
	return curCount + child.data.score;
}, 0);

console.log(count);


