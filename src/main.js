new tabris.Drawer().append(new tabris.PageSelector());

var page1 = new tabris.Page({
  title: "Page 1",
  topLevel: true
});

// Top level pages can always be accessed in the page selector
// even if they are not openend
var page2 = new tabris.Page({
  title: "Page 2",
  topLevel: true
});

var page3 = new tabris.Page({
  title: "Page 3",
  topLevel: true
});

var page4 = new tabris.Page({
  title: "Page 4",
  topLevel: true
});

var page5 = new tabris.Page({
  title: "Page 5",
  topLevel: true
});

var page6 = new tabris.Page({
  title: "Page 6",
  topLevel: true
});

var page7 = new tabris.Page({
  title: "Page 7",
  topLevel: true
});

var page8 = new tabris.Page({
  title: "Page 8",
  topLevel: true
});

var page9 = new tabris.Page({
  title: "Page 9",
  topLevel: true
});

var page10 = new tabris.Page({
  title: "Page 10",
  topLevel: true
});

new tabris.TextInput({
  layoutData: {top: 25, left: "20%", right: "20%"},
  message: "default"
}).appendTo(page1);

["ascii", "decimal", "number", "numbersAndPunctuation", "phone", "email", "url"].forEach(function(mode) {
  new tabris.TextInput({
    layoutData: {top: "prev() 10", left: "20%", right: "20%"},
    keyboard: mode,
    message: mode
  }).appendTo(page1);
});

page1.open();

new tabris.ToggleButton({
  layoutData: {left: 10, top: 10},
  text: "selected",
  selection: true
}).on("change:selection", function(button, selection) {
  this.set("text", selection ? "selected" : "not selected");
}).appendTo(page2);

var progressBar = new tabris.ProgressBar({
  layoutData: {left: 15, right: 15, centerY: 0},
  maximum: 300,
  selection: 100
}).appendTo(page3);

setInterval(function() {
  var selection = progressBar.get("selection") + 1;
  progressBar.set("selection", selection > 300 ? 0 : selection);
}, 20);   