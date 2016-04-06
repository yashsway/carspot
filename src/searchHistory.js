var history = [];
function add(car){
	if (history.length <5){	//if array not full, prepends new car to array
		history.unshift(car);
	}
	else{	//if history already full, removes 5th element and prepends new car to array
		history.pop();
		history.unshift(car);
	}
}
function displayHistory(){	//quick display method, may or may not be needed
	var text = "";
	for(i = 0; i < history.length; i++){
		text += (i+1) + ". " + history[i] + " ";
	}
	return text;
}
function test(name){
	return "Hello, " + name + "!";
}
// SEARCH HISTORY PAGE
var SearchHistoryPage = module.exports = new tabris.Page({
  title: "Previous Searches",
  topLevel: true
});

new tabris.TextView({
  layoutData: {centerX: 0,centerY: 0},
  text: "This is the history page\n WOW",
  alignment: "center"
}).appendTo(SearchHistoryPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Home"
}).on("select", function() {
  HomePage.open();
}).appendTo(SearchHistoryPage);
