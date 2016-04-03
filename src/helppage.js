//HELP PAGE
var HelpPage = module.exports = new tabris.Page({
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
