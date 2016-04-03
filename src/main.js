// WELCOME PAGE
var WelcomePage = new tabris.Page({
  title: "CarSpot",
  topLevel: true
});

new tabris.Button({
  layoutData: {centerX: 0, centerY: 140},
  text: "Continue"
}).on("select", function() {
  HomePage.open();
}).appendTo(WelcomePage);

new tabris.TextView({
  layoutData: {centerX: 0, centerY: -50},
  text: "Welcome\nto\nCARSPOT",
  alignment: "center"
}).appendTo(WelcomePage);

WelcomePage.apply({
  "TextView": {font: "54px Arial, sans-serif", textColor: "#333"},
});


// HOME PAGE
var HomePage = new tabris.Page({
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


//HELP PAGE
var HelpPage = new tabris.Page({
  title: "Help",
  topLevel: true
});

new tabris.TextView({
  layoutData: {centerX: 0,centerY: -100},
  text: "This is the help page\n wow",
  alignment: "left"
}).appendTo(HelpPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Home"
}).on("select", function() {
  HomePage.open();
}).appendTo(HelpPage);

//TYPE PAGE (EXPERT 1)
var TypePage = new tabris.Page({
  title: "Type ID",
  topLevel: true
});

new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "This is the type page\n wow",
  alignment: "center"
}).appendTo(TypePage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Next"
}).on("select", function() {
  LogoPage.open();
}).appendTo(TypePage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 150, width: 150},
  text: "Back"
}).on("select", function() {
  HomePage.open();
}).appendTo(TypePage);


//Logo PAGE (EXPERT 2)
var LogoPage = new tabris.Page({
  title: "Logo ID",
  topLevel: true
});

new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "This is the logo page\n wow",
  alignment: "center"
}).appendTo(LogoPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Next"
}).on("select", function() {
  OriginPage.open();
}).appendTo(LogoPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 150, width: 150},
  text: "Back"
}).on("select", function() {
  TypePage.open();
}).appendTo(LogoPage);


//Origin PAGE (EXPERT 3)
var OriginPage = new tabris.Page({
  title: "Origin ID",
  topLevel: true
});

new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "This is the origin page\n wow",
  alignment: "center"
}).appendTo(OriginPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Next"
}).on("select", function() {
  PassengerPage.open();
}).appendTo(OriginPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 150, width: 150},
  text: "Back"
}).on("select", function() {
  LogoPage.open();
}).appendTo(OriginPage);


//PASSENGER PAGE (EXPERT 4)
var PassengerPage = new tabris.Page({
  title: "Passengers ID",
  topLevel: true
});

new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "This is the passenger page\n wow",
  alignment: "center"
}).appendTo(PassengerPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Next"
}).on("select", function() {
  VerifyPage.open();
}).appendTo(PassengerPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 150, width: 150},
  text: "Back"
}).on("select", function() {
  OriginPage.open();
}).appendTo(PassengerPage);


//VERIFICATION PAGE

var VerifyPage = new tabris.Page({
  title: "Verify ID",
  topLevel: true
});

var progressBar = new tabris.ProgressBar({
  layoutData: {left: 15, right: 15, centerY: -100},
  maximum: 300,
  selection: 100
}).appendTo(VerifyPage);

setInterval(function() {
  var selection = progressBar.get("selection") + 1;
  progressBar.set("selection", selection > 300 ? 0 : selection);
}, 20);

new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "Is this the right car?",
  alignment: "center"
}).appendTo(VerifyPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 50, width: 150},
  text: "Yes"
}).on("select", function() {

}).appendTo(VerifyPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "No"
}).on("select", function() {

}).appendTo(VerifyPage);

new tabris.Button({
  layoutData: {centerX: 0, centerY: 150, width: 150},
  text: "Back"
}).on("select", function() {
  PassengerPage.open();
}).appendTo(VerifyPage);

WelcomePage.open();
