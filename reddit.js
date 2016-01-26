var reddit = require("./data.json")

// Write your solutions below
var info = reddit.data.children;
// for each - console.log all titles
// 1.)

info.forEach(function (item){
	console.log(item.data.title)
});
// 2.)
var linksArray = info.map(function (item){
	return "http://reddit.com" + item.data.permalink;
});
console.log(linksArray);


// 3.)
var hasText = function(item){
	return item.data.selftext.length > 0;
};

var hasSelfText = info.filter(hasText);

console.log(hasSelfText);

// 4.)
var add = function (a, b) {
  return a + b.data.score;
};

var scoreSum = info.reduce(add, 0);
console.log(scoreSum);

