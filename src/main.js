require("./welcome.js").open();
require("./homepage.js");
require("./helppage.js");
require("./logopage.js");
require("./originpage.js");
require("./typepage.js");
require("./verificationpage.js");
require("./searchHistory.js");

new tabris.Drawer().append(new tabris.PageSelector());
