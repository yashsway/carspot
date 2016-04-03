new tabris.Drawer().append(new tabris.PageSelector());

var HomePage = new tabris.Page({
  title: "Home",
  topLevel: true
});

var SearchHistoryPage = new tabris.Page({
  title: "Previous Searches",
  topLevel: true
});

var HelpPage = new tabris.Page({
  title: "Help",
  topLevel: true
});

new tabris.Button({
  layoutData: {centerX: 0, centerY: -140},
  text: "Search"
}).on("select", function() {
	//search
}).appendTo(HomePage);

new tabris.TextInput({
  layoutData: {centerX:0,centerY:-90,width:200,height:30},
  message: "Car Type"
}).on("accept", function(widget, text) {
	//do something with the text
}).appendTo(HomePage);

new tabris.TextInput({
  layoutData: {centerX:0,centerY:-50,width:200,height:30},
  message: "Origin"
}).on("accept", function(widget, text) {
	//do something with the text
}).appendTo(HomePage);

new tabris.TextInput({
  layoutData: {centerX:0,centerY:-10,width:200,height:30},
  message: "Manufacturer"
}).on("accept", function(widget, text) {
	//do something with the text
}).appendTo(HomePage);

new tabris.TextInput({
  layoutData: {centerX:0,centerY:30,width:200,height:30},
  keyboard: "number",
  message: "Passenger Capacity"
}).on("accept", function(widget, text) {
	//do something with the text
}).appendTo(HomePage);


new tabris.TextView({
  layoutData: {centerY: -100},
  text: "This is the help page\n wow",
  alignment: "left"
}).appendTo(HelpPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 140},
  text: "Help"
}).on("select", function() {
  HelpPage.open();
}).appendTo(HomePage);

HomePage.open();
