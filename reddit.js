//Problem #1 ForEach by Titile
var reddit = require("./data.json")
var posts = reddit.data.children;

posts.forEach(function (redChild) {
	console.log(redChild.data.title);
}

//Problem #2 Map Iterators with Reddit

var linkMap = posts.map(function (person) {
	return 'http://reddit.com' + person.data.permalink
});

console.log(linkMap);

//Problem # 3
var postFilter = function(post) {
	if (post.data.selftext!==""){
		return true

	}
}


var filteredPosts = posts.filter(postFilter)

console.log(filteredPosts)

//Problem # 4 

 var scoreCount = post.map(function (totalScore) {
 	return totalScore.data.score;
 });

 var add = function (a, b){
 	return (a + b);
 };




