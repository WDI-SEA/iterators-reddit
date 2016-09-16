var reddit = require('../data.json');

// Write your solutions below

// var sum = reddit.data.children.reduce(function(total, post, idx) {
//   return total + post.data.score;
// });

// console.log(sum);

/**********************
Question 1
**********************/

// reddit.data.children.forEach(function(child) {
// 	console.log(child.data.title);
// });


/*********************
Question 2
*********************/


// var links = reddit.data.children.map(function(item) {
// 	return `http://reddit.com` + item.data.permalink;
// });

// console.log(links);


/********************
Question 3
********************/

// var productsWithSelfText = [];
 
//  for (i = 0; i < reddit.data.children.length; i++) {
//  	productsWithSelfText.push(reddit.data.children[i].data.selftext);	
//  }
 
//  var checkText = function(text){
//  	if(text !== ""){
//  		return text;
//  	}
//  }
 
//  var textArray = productsWithSelfText.filter(checkText);
//  console.log(textArray);

/*********************
Question 4
********************/

// var scores = [];

// function findScores() {
// 	for (var i = 0; i < reddit.data.children.length; i++) {
// 		scores.push(reddit.data.children[i].data.score);
// 	}
// }
// findScores();

// var add = function(a, b){
// 	return a + b;
// }

// var oneScore = scores.reduce(add);

// console.log(oneScore);






