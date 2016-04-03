//Origin PAGE (EXPERT 3)
var OriginPage = module.exports = new tabris.Page({
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
