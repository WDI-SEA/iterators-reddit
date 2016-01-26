var reddit = require("./data.json")

// Write your solutions below
// Question 1
var titles = reddit.data.children.forEach(function(titleName){
	console.log(titleName.data.title);
});
// Question 2
var links = reddit.data.children.map(function(link){
	return 'http://reddit.com' + link.data.permalink;
})

console.log(links);

// Question 3
var hasText = function(child){
	return child.data.selftext.length > 0;
};

var check = console.log(reddit.data.children.filter(hasText));

console.log(check);

// Question 4

var add = function(a,b){
	return a + b.data.score;
};

var sum = reddit.data.children.reduce(add, 0);

console.log(sum);




// console.log(reddit["data"]);