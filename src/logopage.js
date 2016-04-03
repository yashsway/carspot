//Logo PAGE (EXPERT 2)
var LogoPage = module.exports = new tabris.Page({
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
