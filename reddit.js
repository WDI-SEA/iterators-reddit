var reddit = require("./data.json")

var titleSub = reddit.data.children

//1. logs all titles

var allTitles = [];

var title = titleSub.forEach(function(array) {
allTitles += array.data.title + "\n ------------------------ \n";
})

console.log(allTitles);

//2. logs all permalinks

var allPermaLinks = titleSub.map(function(link) {
return "http://www.reddit.com" + link.data.permalink;
})

console.log(allPermaLinks.length);

//3. filter the posts that contain actual text in the selftext key

isPopulated = function(text){
return text.data.selftext != "";
}

var hasSelfText = titleSub.filter(isPopulated);

// console.log(hasSelfText);
console.log(hasSelfText.length);

//4. reduce - use reduce to count all the score values across posts

var scores = titleSub.map(function(titleScore){
return titleScore.data.score;
})

console.log(scores);
var add = function(a, b){
return a + b;
}

var totalScore = scores.reduce(add);

console.log(totalScore);





