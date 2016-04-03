// HOME PAGE
var HomePage = module.exports = new tabris.Page({
  title: "Home",
  topLevel: true
});

new tabris.Button({
  layoutData: {centerX: 0, centerY: -100, width: 150},
  text: "Identify a Car"
}).on("select", function() {
	TypePage.open();
}).appendTo(HomePage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: -40, width: 150},
  text: "Search History"
}).on("select", function() {
	SearchHistoryPage.open();
}).appendTo(HomePage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 20, width: 150},
  text: "Help"
}).on("select", function() {
  HelpPage.open();
}).appendTo(HomePage);
