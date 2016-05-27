// ================= One =================== //

var reddit = require('../data.json');

// Write your solutions below

// console.log(reddit.data);
// var titles = reddit.data.children.forEach(function(element){
//   console.log(element.data.title);
// })


// ================= Two =================== //

// var permalinks = reddit.data.children.map(function(element){
//   return 'http://reddit.com' + element.data.permalink;
// })

// console.log(permalinks);

// ================= Three =================== //

// var texts = reddit.data.children.filter(function(element, idx){
//   if (element.data.selftext != ""){
//     // console.log(element.data.selftext);
//     return true;
//   }
//   // return (element.data.selftext == "");
// })

// console.log(texts[0].data.selftext);
// console.log(reddit.data.children[0].data.selftext);

// ================= Four =================== //

var sum = reddit.data.children.reduce(function(a, b){
  return a + (b.data.score);
},0)


console.log(sum);
