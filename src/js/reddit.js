/// EXERCISE 1

var reddit = require('../data.json');

// Write your solutions below

// var allTitles = reddit.data.children.forEach(function(element, idx) {
//   console.log(reddit.data.children[idx].data.title);
// });




// console.log(allTitles);


///// EXERCISE 2


// var permalinks = reddit.data.children.map(function(element, idx){
//     return ('http://reddit.com' + reddit.data.children[idx].data.permalink);


// })
//  console.log(permalinks);


//EXERCISE 3

// var filt = reddit.data.children.filter(function(element, idx) {
//           return (element.data.selftext);

// })

// console.log(filt);


//EXERCISE 4
runningTotal = 0;
var sum = reddit.data.children.reduce(function(a, b) {


          return a + (b.data.score)
}, runningTotal)

console.log(sum);




