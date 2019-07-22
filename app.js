const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index.html");
});

//Server listener
app.listen("8081", "127.0.0.1", function() {
    console.log("Express Server is running...");
});

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
});

app.get("/venus", function(req, res) {
    res.render("venus.html");
});
