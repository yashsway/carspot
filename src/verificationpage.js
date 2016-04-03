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
