var reddit = require('../data.json');

// Write your solutions below

// ================= Problem One ==============================//

// ------- .forEach - console.log all post titles


var postTitles = reddit.data.children.forEach(function(element, idx) {
  console.log(reddit.data.children[idx].data.title);
});




// ================ Problem Two ===============================//

// -------- .map - Print an array of permalinks, append http://reddit.com
// -------- to each so that they contain full http:// path to reddit


// var redditPermalinks = reddit.data.children.map(function(element, idx) {
//   return "http://reddit.com" + reddit.data.children[idx].data.permalink
// });

// console.log(redditPermalinks);




// ================== Problem Three ============================//

// -------- .filter - Filter the posts
//--------- that contain actual text in the selftext key


// var selfTextPosts = reddit.data.children.filter(function(element, idx) {
//   return element.data.selftext;
// });

// console.log(selfTextPosts);




// ==================== Problem Four ============================//

// -------- .reduce - Use reduce to obtain
// -------- the sum of all the score values across all posts in the dataset

// var initialCount = 0;

// var sum = reddit.data.children.reduce(function(a, b) {
//   return a + (b.data.score);
// }, initialCount);

// console.log(sum);
