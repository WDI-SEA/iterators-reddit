var reddit = require('../data.json');



//#1 use forEach on the array to get all post titles

/*
var titles = reddit.data.children.forEach(function(element, idx) {
  console.log(element.data.title)

});

*/


//#2  permalinks into a printed array

/*
var myArray = [];

var plinks = reddit.data.children.map(function(element, idx) {
  myArray.push("http://reddit.com" + element.data.permalink)

});

console.log(myArray)

*/


//#3 filter posts with text in selftext


// USE THIS FOR 3
/*
var myArray = reddit.data.children.filter(function(element, idx) {
  if (element.data.selftext != "") {
    return true;
  }
});

console.log(myArray);
*/

//#4 reduce

var scoreTotal = 0;
var mySum = reddit.data.children.reduce(function(a, b) {

  return a + (b.data.score);
}, scoreTotal);


  console.log(mySum);


//ALTERNATE ATTEMPT FOR #3
//TRY A SEPARATE FUNCTION FOR THE null TEXT TEST

//DID NOT FIGURE OUT THE FUNCTION PASSING

/*
function textTest (arrayItem) {
  if (arrayItem != "")
    return true;
}

var myArray = reddit.data.children.filter(textTest(element.data.selftext)
}
*/


