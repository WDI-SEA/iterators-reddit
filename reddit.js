var reddit = require("./data.json")

// Write your solutions below
// console.log(reddit.data.children.length);


// #1
reddit.data.children.forEach(function(allTitles) {
	console.log(allTitles.data.title);
});

// #2

var permaLinks = reddit.data.children.map(function(links) {
		return "http://reddit.com" + links.data.permalink;
});

console.log("permaLinks:\n", permaLinks);
// console.log("permaLinks:\n", permaLinks.length);

// #3

var filter = reddit.data.children.filter(function(children) {
	return children.data.selftext.length;
});

console.log(filter);
// console.log(filter.length);

// #4

var reduce = reddit.data.children.reduce(function(
	previousValue, 
	currentValue,
	index
	) {
	// console.log("Index: "+index);
	return previousValue + currentValue.data.score
}, 0);
console.log(reduce);

