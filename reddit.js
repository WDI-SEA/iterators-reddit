var reddit = require("./data.json")
var children = reddit.data.children;
// Write your solutions below

//Question 1
children.forEach(function(child){
	console.log(child.data.title);
	console.log("________________");
}); //used second console log to make more legible

//Question 2
var permalink =children.map(function(child) {
	return "http://www.reddit.com" + child.data.permalink;
});
console.log(permalink)

//Question 3
var selftext = children.filter(function(pizza) {
	return pizza.data.selftext.length;
});
console.log(selftext);

//Question 4
var total = children.map(function(children2) {
	return children2.data.score
});

var add =function(a,b) {
	return a + b
}
var sum =total.reduce(add)
console.log(sum)

// console.log(reddit["data"]); <--what's this?

