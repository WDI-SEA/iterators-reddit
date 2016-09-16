var reddit = require('../data.json');

// Write your solutions below


//ANSWER 1
// reddit.data.children.forEach(function(answer) {
// 	console.log(answer.data.title);
// });

//ANSWER 2
// reddit.data.children.map(function(answer) {
// 	console.log("http://reddit.com" + answer.data.permalink);

// });

//ANSWER 3

// var Titles = reddit.data.children.filter(function(answer) {
// 	return (answer.data.selftext !== "");
// });

// console.log(Titles);

//ANSWER 4

// var scoreNums = reddit.data.children.map(function(answer) {
// 	return (answer.data.score);
// });

// var add =  function(a, b){
// 	return a + b;
// }

// var combinedScore = scoreNums.reduce(add);

// console.log(combinedScore)
