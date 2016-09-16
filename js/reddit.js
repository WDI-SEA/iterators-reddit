var reddit = require('../data.json');

// Write your solutions below

// var sum = reddit.data.children.reduce(function(total, post, idx) {
//   return total + post.data.score;
// });

// console.log(sum);

// QUESTION 1

reddit.data.children.forEach(function(postTitle) {
	console.log(postTitle.data.title);
});


// QUESTION 2

reddit.data.children.map(function(permLink) {
	console.log("http://reddit.com" + permLink.data.permalink);
});


// QUESTION 3

var fullText = [];
var emptyText = [];

function empty(txt) {
	return txt != "";
}

reddit.data.children.forEach(function (child){
	emptyText.push(child.data.selftext);
});

fullText = emptyText.filter(empty);

console.log(fullText);


// QUESTION 4

var scr = reddit.data.children.map(function(scr) {
	return (scr.data.score);
});

var add = function(a, b) {
	return a + b;
};

var sum = scr.reduce(add);
console.log(sum)




