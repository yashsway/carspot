//HELP PAGE
var HelpPage = module.exports = new tabris.Page({
  title: "Help",
  topLevel: true
});


new tabris.TextView({
  layoutData: {centerX: 0,centerY: -100},
  
  text: "This is the help page\n"
  + "if you only know some of the car feature and want to figure out what is it please press the Identify a Car button"
  + "Then you can find the information about the car including the name, swept volume, price and engine model\n"
  + "To do this you need to follow the instructions to type different kind of info of your car and press 'next' each time"
  + "Then you can view your result\n" 
  + "you can access your search history by press the Search History botton in the Home page "
  + "then you can view your recent search history "
  + "this function allows you access recent search history with out typing in all information once more\n"
  + "To view the copyright info please press the copyright button"
  
  alignment: "left"
}).appendTo(HelpPage);


new tabris.Button({
  layoutData: {centerX: 0, centerY: 120, width: 150},
  text: "Copyright"
}).on("select", function() {
  CopyrightInfo.open();
}).appendTo(HelpPage);


new tabris.Button({
  layoutData: {centerX: 0, centerY: 100, width: 150},
  text: "Back to Home page"
}).on("select", function() {
  HomePage.open();
}).appendTo(HelpPage);