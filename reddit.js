var reddit = require("./data.json")

// Write your solutions below
var info = reddit.data.children;
// for each - console.log all titles
// 1.)
console.log("Question 1 Solution");
info.forEach(function (item){
	console.log(item.data.title)
});

// map - return an array of permalinks
// 2.)
console.log("Question 2 Solution");
var linksArray = info.map(function (item){
	return "http://reddit.com" + item.data.permalink;
});
console.log(linksArray);

// filter - filter items that contain selftext
// 3.)
console.log("Question 3 Solution");
var selfText = function(item){
	return item.data.selftext.length > 0;
};

var hasSelfText = info.filter(selfText);
console.log(hasSelfText);

//another way
var hasText = info.filter(function (item){
	return item.data.selftext.length > 0;
});

console.log(hasText.length);

// reduce - obtain sum of all scores
// 4.)
console.log("Question 4 Solution");
var add = function (a, b) {
  return a + b.data.score;
};

var scoreSum = info.reduce(add, 0);
console.log(scoreSum);

//another way
var reduced = info.reduce(function(prev, current, index) {
	return prev + current.data.score;
}, 0);
console.log(reduced);