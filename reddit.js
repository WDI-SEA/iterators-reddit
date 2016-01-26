var reddit = require("./data.json")
// Write your solutions below

// console.log(reddit["data"]);


//---------------------------------------------------------
//Question 1
//console.log all titles

reddit["data"].children.forEach(function(child) {
	console.log(child.data.title);
});


//---------------------------------------------------------
//Question 2
//Return an array of permalinks, append http://reddit.com to each so that they contain full http:// path to reddit

var getLinks = reddit["data"].children.map(function(ind) {
	return "http://reddit.com" + ind.data.permalink;
});

console.log(getLinks);


//---------------------------------------------------------
//Question 3
//Filter the posts that contain actual text in the selftext key

var selfText = function(child) {
	if (child.data.selftext !== "") {
		return child.data.title;
	}
}

var filter = reddit["data"].children.filter(selfText);

//Extra - create a new array with just the titles of the filtered Children objects instead of returning full objects

var filteredTitles = filter.map(function(child) {
	return child.data.title;
})

console.log(filteredTitles);


//-----------------------------------------------------------
//Question 4
//Use reduce to count all the score values across posts

var eachScore = reddit['data'].children.map(function(child) {
	return child.data.score;
})

var sum = function(a, b) {
	return a + b;
}

var totalScore = eachScore.reduce(sum);

console.log("Total of all scores: " + totalScore);

//Extra calculate the average score

var average = function(sum, length) {
	return (a / b);
}

var avgScore = totalScore/reddit['data'].children.length;


console.log("Average of all scores: " + avgScore);