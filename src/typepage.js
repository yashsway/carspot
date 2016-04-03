//TYPE PAGE (EXPERT 1)
var TypePage = new tabris.Page({
  title: "Type ID",
  topLevel: true
});

new tabris.Button({
  layoutData: {centerX: 0, centerY: -100, width: 150},
  text: "Test"
}).on("select", function() {
  var t = test("Yash");
  sample.set("text",t);
}).appendTo(HomePage);

var sample = new tabris.TextView({
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
