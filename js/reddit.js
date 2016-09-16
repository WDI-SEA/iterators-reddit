var reddit = require('../data.json');

// // Write your solutions below

var sum = reddit.data.children.reduce(function(total, post, idx) {
  return total + post.data.score;
});






reddit.data.children.forEach(function(postTitle) {
	console.log(reddit.data.children[0].data.title)
});



// 1.)

reddit.data.children.forEach(function(postTitle) {
	console.log(postTitle.data.title);
});


// 2.)

reddit.data.children.map(function(permlink) {
	console.log("http://reddit.com" + permlink.data.permalink);
});

// // 3.)

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

// 4.)

var scoreNums = reddit.data.children.map(function(answer) {
    return (answer.data.score);
});

var add =  function(a, b){
    return a + b;
}

var reduction = scoreNums.reduce(add);

console.log(reduction);




