var reddit = require("./data.json")

// Write your solutions below
// var titles = reddit.data.children.data.title;
var titles = reddit.data.children;
titles.forEach(function(title){
	console.log(title.data.title);
})

var links = titles.map(function (link) {
	return "http://reddit.com" +link.data.permalink;
})
console.log(links);

var notBlank = function(selftext){
	return (selftext.data.selftext!== '');
}
var selftextarray = titles.filter(notBlank);
console.log(selftextarray);
console.log(selftextarray.length);
var add = function(a,b){
	return a + b;
}
var scores = titles.map(function(score){
	return score.data.score;
})
var count = scores.reduce(add);
console.log(count);

// console.log(reddit["data"]);