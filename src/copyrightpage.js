//copyright and develop team info
var HelpPage = module.exports = new tabris.Page({
  title: "Help",
  topLevel: true
});


new tabris.TextView({
  layoutData: {centerX: 0,centerY: -100},
  
  text: "This is the help page\n"
  + "Developed by Team 09 3A04\n McMaster University"
  
  alignment: "left"
}).appendTo(HelpPage);


new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Back to Home page"
}).on("select", function() {
  HelpPage.open();
}).appendTo(HelpPage);