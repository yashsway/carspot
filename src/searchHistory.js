var history = [];
function add(var car){
	if (history.length <5){
		history.unshift(car);
	}
	else{
		history.pop();
		history.unshift(car);
	}
}
function displayHistory(){
	var text;
	for(i = 0; i < history.length; i++){
		text += (i+1) + ". " + history[i] + "<br>";
	}
	return text;
}
function test(name){
	return "Hello, " + name + "!";
}
// SEARCH HISTORY PAGE
var SearchHistoryPage = new tabris.Page({
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
