var reddit = require("./data.json")
var children = reddit.data.children
// Write your solutions below
//console.log(reddit["data"]);

// #1 `forEach` -  `console.log` all titles

console.log("-------- Problem: 1 --------")
children.forEach(function (child, idx) {
	console.log('Title ' + idx + ': ' + child.data.title);
});

// #2 map` - Return an array of permalinks, append `http://reddit.com` to each so that they contain full http:// path to reddit

console.log("-------- Problem: 2 --------")
var url = children.map(function (child, idx) {
	return 'Permalink ' + idx + ': http://reddit.com' + child.data.permalink;
});
console.log(url);

// #3 `filter` - Filter the posts that contain actual text in the  `selftext` key

console.log("-------- Problem: 3 --------")
var filterSelfText = function (child) {
	if (child.data.selftext != '') {
		return child.data.selftext;
	}
}
var containText = children.filter(filterSelfText);
console.log(containText.length + ' posts contain selftext.');

// #4 `reduce` - Use reduce to count all the `score` values across posts

console.log("-------- Problem: 4 --------")
var scores = [];
var add = function (a, b) {
	return a + b;
}

for (var i = 0; i < children.length; i++) {
	scores.push(children[i].data.score);
};

console.log('Total score: ' + scores.reduce(add));




