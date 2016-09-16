var reddit = require('../data.json');

// Write your solutions below



// // 1. forEach - console.log all post titles 

reddit.data.children.forEach(function(post) {
	console.log("Post title: " + post.data.title)
});



// // 2. map - Print an array of permalinks,
// append http://reddit.com to each so that they contain full http:// path to
// reddit 

var perma = reddit.data.children.map(function(post) {
	return "http://reddit.com" + post.data.permalink;
});

console.log(perma);



// // 3. filter - Filter the posts that contain actual text in the selftext key

//returns only the items with a value for selftext
var filterText = function(item) {
		return item.data.selftext;
}

var selftextText = reddit.data.children.filter(filterText);

console.log(selftextText); //print items with text in selftext

console.log("ITEMS WITH TEXT IN SELFTEXT ARE:");
for (i=0; i < selftextText.length; i++) {
	console.log(selftextText[i].data.title);
}



// // 4. reduce - Use reduce to obtain the sum of all the score values across all
// // posts in the dataset

//creates an array of just the scores
var scoreArray = [];
for (var i = 0; i < reddit.data.children.length; i++) {
	scoreArray.push(reddit.data.children[i].data.score);
}

//adds the scores
var add = function (a, b) {
	return a + b;
}
var sum = scoreArray.reduce(add);
console.log(sum);   //print sum


