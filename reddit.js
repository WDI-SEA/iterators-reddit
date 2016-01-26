var reddit = require("./data.json")


// Write your solutions below

/*Part 1 - forEach - console.log all titles*/

reddit.data.children.forEach(function (theTitle){
	console.log(theTitle.data.title);
})

/*Part 2 - map - Return an array of permalinks,  to each so that they contain full http:// path to reddit*/
var permalinks = [];

reddit.data.children.forEach(function (child){
	permalinks.push(child.data.permalink);
});

var permalinksHTTP = permalinks.map(function(http){
	return "http://reddit.com" + http;
})
console.log(permalinksHTTP);

/*Part 3 - filter - Filter the posts that contain actual text in the selftext key*/
var nonEmptySelfText = [];
var selfText = [];

function empty(text) {
	return text != "";
}

reddit.data.children.forEach(function (child){
	selfText.push(child.data.selftext);
});

nonEmptySelfText = selfText.filter(empty);

console.log(nonEmptySelfText);

/*Part 4 - reduce - Use reduce to count all the score values across posts*/
scoreArray = [];

function count(a, b){
	return a + b;
}

reddit.data.children.forEach(function (child){
	scoreArray.push(child.data.score);
});

var sum = scoreArray.reduce(count);
console.log(sum);
