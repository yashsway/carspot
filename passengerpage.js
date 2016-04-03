//PASSENGER PAGE (EXPERT 4)
var PassengerPage = module.exports = new tabris.Page({
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
