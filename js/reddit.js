var reddit = require('../data.json');

// Write your solutions below


//Question 1
var titles = [];

for (i = 0; i < reddit.data.children.length; i++) {
	titles.push(reddit.data.children[i].data.title);
}

titles.forEach(function(title) {
	console.log(title);
})


//Question 2
// var permalinks = [];

// for (i = 0; i < reddit.data.children.length; i++) {
// 	permalinks.push(reddit.data.children[i].data.permalink); 
// }

// var http = permalinks.map(function(address){
// 	return "http://reddit.com" + address;
// });

// console.log(http);

// // Question 3

// var realText = [];

// for (var i = 0; i < reddit.data.children.length; i++) {
// 	realText.push(reddit.data.children[i].data.selftext); 
// }

// var filteredText = function(oldText) {
// 	if(oldText !== "") {
// 	return oldText;
// 	}
// }

// var newText = realText.filter(filteredText);

// console.log(newText);

//Filter (javascript iterator)
//returns a subset of the original array based on a condition

// var ourNames = ["Brandi", "Tanner", "Carlos", "Sarah", "Bert", "Jacob", 
// "Travis", "Kim", "Jamie", "Alford", "Brittany"];

// var evenLetters = function(name) {
// 	return name.length % 2 === 0;
// }

// var oddLetters = function(name) {
// 	return name.length % 2 !== 0;
// }

// var evenLengthNames = ourNames.filter(evenLetters);
// var oddLengthNames = ourNames.filter(oddLetters);

// // filter returns a copy of (a subset of) the original array
// // the original remains untouched

// console.log(ourNames);
// console.log(evenLengthNames);
// console.log(oddLengthNames);

//Question 4

// var scores = [];

// for (i = 0; i < reddit.data.children.length; i++) {
// 	scores.push(reddit.data.children[i].data.score);
// }

// var add = function(a, b) {
// 	return a + b;
// }

// var sum = scores.reduce(add);

// console.log(sum);

// //Reduce (JavaScript iterator)
// var nums = [1, 2, 3, 4, 5];

// var add = function(a, b) {
// 	return a + b;
// }

// var sum = nums.reduce(add);

// var sumPlus10 = nums.reduce(add, 10);

// //Original array, unaffected. Optional param is a start value.
// console.log(nums);
// console.log(sum);
// console.log(sumPlus10);
