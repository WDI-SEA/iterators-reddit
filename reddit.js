var reddit = require("./data.json")

// Write your solutions below

// console.log(reddit["data"]);


// Print all reddit titles using forEach: 
var array = reddit.data.children;




array.forEach(function (array) {
	console.log(array.data.title);
 });

console.log("----------------------break----------------------")

// Return permalinks using map
// var links = array.forEach(function (array) {
// 	console.log(array.data.permalink);	
// });

var permalinks = array.map(function (link) {
	return "http://reddit.com" + link.data.permalink;
});
 console.log(permalinks);

console.log("----------------------break----------------------")
// Filter: show posts that have text in selftext key
var text = function (post) {
	return post.data.selftext !== "";
};
var hasText = array.filter(text);

console.log(hasText);
console.log("There are " + hasText.length + " posts with text in the selftext key.");

console.log("----------------------break----------------------")

//Reduce - count all the score values 
var scores = array.map(function (scorenum) {
	return scorenum.data.score;
});
//console.log(scores);


var sum = function(a, b) {
 	return a + b;
 };
var sumOfScores = scores.reduce(sum);
console.log("The sum of all scores is " + sumOfScores);













