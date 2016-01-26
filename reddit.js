var reddit = require("./data.json")



// Question 1: Use foreach loop to console.log all titles 

reddit.data.children.forEach(function(childrenObject) {console.log(childrenObject.data.title)} );


//Question 2: Return an array of permalinks, 
// append http://reddit.com to each so that they contain full http:// path to reddit

var permalinkArray = reddit.data.children.map(function(childrenObject) {
return "http://reddit.com" + childrenObject.data.permalink } );

console.log (permalinkArray);


Question 3: Using filter iterator, Filter the posts that contain actual text 
in the selftext key

var actualText = reddit.data.children.filter(function(childrenObject) { 
return childrenObject.data.selftext.length } );

console.log(actualText);


// Question 4 reduce - Use reduce to count all the score values across posts

var childrenObject = reddit.data.children

var scores = childrenObject.map(function(childrenObjectScore) {
	return childrenObjectScore.data.score
}) ;

console.log(scores);

var addition = function (a,b) {
	return a + b
};

var totalScore = scores.reduce(addition);

console.log(totalScore) ;


console.log(reddit["data"]);

