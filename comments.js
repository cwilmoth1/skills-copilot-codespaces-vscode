// Create web server;
// Create a route for /comments
// Create a route for /comments/new
// Create a route for /comments/:id
// Create a route for /comments/:id/edit

var express = require("express");
var app = express();

app.get("/comments", function(req, res) {
    res.send("This is the comments page");
});

app.get("/comments/new", function(req, res) {
    res.send("This is the new comments page");
});

app.get("/comments/:id", function(req, res) {
    res.send("This is the comments page for id: " + req.params.id);
});

app.get("/comments/:id/edit", function(req, res) {
    res.send("This is the edit page for comments id: " + req.params.id);
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});