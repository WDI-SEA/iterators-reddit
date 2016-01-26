var reddit = require("./data.json")
var datas = reddit["data"];
var dataChild = datas["children"];
//console.log(dataChild);
//console.log(dataChild[0].data);

// Write your solutions below

//for each function
var forE = function(){
	dataChild.forEach (function(item){
		console.log(item.data.title + "is the title");
	});
}

var perma = function() {
	var links = [];
	//this pushes all permalinks into an array
	dataChild.forEach ( function(perms){
		links.push(perms.data.permalink);
	});
	// this maps them with http://www.reddit.com
	var link2 = links.map(function(sub){
		return "http://www.reddit.com"+sub;
	})
	console.log(link2);
}

var filt = function(){
	//returns array of objects which are not blank
	var self = dataChild.filter(function(selfy){
		return selfy.data.selftext != "";
	});
	//prints titles in array
	for (posts in self){
		console.log("posts with selftext include:")
		console.log(self[posts].data.title);
	}
	
}

var redux = function(){
	var scores =[];
	//pushes scores into array
	dataChild.forEach( function(score){
		scores.push(score.data.score);
	});
	//sums scores
	var sum = scores.reduce(function(a, b){
		return a+b;
	})
	console.log ("sum is "+ sum);
}


//function calls
var z = forE();
var y = perma();
var x = filt()
var w = redux();

//console.log(reddit["data"]);

