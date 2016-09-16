var reddit = require('../data.json');

// Write your solutions below

var sum = reddit.data.children.reduce(function(total, post, idx) {
  return total + post.data.score;
});

console.log(sum);

//Q1

// var titles = [];

// 	for (i = 0; i < reddit.data.children.length; i++) {
// 		titles.push(reddit.data.children[i].data.title);	
// 	}

// titles.forEach(function(title){
// 	console.log(title);
// });


//Q2
// var permalinks = [];

// for (i = 0; i < reddit.data.children.length; i++) {
// 	permalinks.push(reddit.data.children[i].data.permalink);	
// }

// var appendToLink = permalinks.map(function(append){
// 	return "http://reddit.com" + append;
// });

// console.log(appendToLink);

//Q3
// filter - Filter the posts that contain actual text in the selftext key
//Filter (JS iterator)
// var actualText = [];

// for (i = 0; i < reddit.data.children.length; i++) {
// 	actualText.push(reddit.data.children[i].data.selftext);	
// }

// var isText = function(thereIsText){
// 	if(thereIsText !== ""){
// 		return thereIsText;
// 	}
// }

// var hasText = actualText.filter(isText);
// console.log(hasText);

// Q4
// reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset
// var add = function(a, b){
//   return a + b;
// }

// var sum = nums.reduce(add);
// var sumPlus10 = nums.reduce(add, 10);

// //Original array, unaffected. Optional param is a start value.
// console.log(nums);
// console.log(sum);
// console.log(sumPlus10);

//Q4!

// var scoreSum = [];

// for (i = 0; i < reddit.data.children.length; i++) {
// 	scoreSum.push(reddit.data.children[i].data.score);	
// }

// var add = function(a, b){
//   return a + b;
// }

// var sum = scoreSum.reduce(add);
// console.log(sum);













