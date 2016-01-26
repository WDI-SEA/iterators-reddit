var reddit = require("./data.json")

// Write your solutions below

console.log("Question 1: ***************************")

reddit.data.children.forEach(function (child, idx) {
	console.log(child.data.title);
	console.log(idx);
});

// console.log(reddit["data"]);

console.log("Question 2: ***************************")

var permalink = reddit.data.children.map(function (child) {
	return "http://reddit.com" + child.data.permalink 

});

console.log(permalink);

console.log("Question 3: ***************************")

var selfText = reddit.data.children.filter(function (selfTextObject) {
	return selfTextObject.data.selftext.length
});

console.log(selfText);

console.log("Question 4: ***************************")

// var score = children.map(function(child) {
// 	return child.data.score
// });

// console.log(score)

var score = reddit.data.children.reduce(function (currentCount, child) {
	return currentCount + child.data.score


},0);

console.log(score)
































