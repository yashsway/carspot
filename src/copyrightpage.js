//copyright and develop team info
var CopyrightPage = module.exports = new tabris.Page({
  title: "Copyright",
  topLevel: true
});


new tabris.TextView({
  layoutData: {centerX: 0,centerY: -100},
  
  text: "This is the copyright page\n"
  + "Developed by Team 09 3A04\n McMaster University"
  
  alignment: "left"
}).appendTo(CopyrightPage);


new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Back to Help page"
}).on("select", function() {
  HelpPage.open();
}).appendTo(CopyrightPage);