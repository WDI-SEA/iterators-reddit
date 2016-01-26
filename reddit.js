var reddit = require("./data.json")

// Write your solutions below

//forEach iterator for all titles

reddit["data"].children.forEach(function (title) {
	console.log(title.data.title);
});

//map iterator for array of permalinks

var permalinks = reddit["data"].children.map(function (link) {
	return "http://reddit.com" + link.data.permalink;
});

console.log(permalinks);

//filter iterator for actual text in selftext key

var containsText =  function (text) {
	return text.data.selftext != "";
};

var selfTextTrue = reddit["data"].children.filter(containsText);

console.log(selfTextTrue);

//reduce iterator to count score values across posts

var getScore = reddit["data"].children.map(function (eachScore) {
	// console.log(eachScore.data.score);
	return eachScore.data.score;
});

var add = function (a, b) {
	return a + b;
};

var scoreSum = getScore.reduce(add);
console.log(scoreSum);

// console.log(reddit["data"]);

