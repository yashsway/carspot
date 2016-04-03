// WELCOME PAGE
var WelcomePage = module.exports = new tabris.Page({
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
