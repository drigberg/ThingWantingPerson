var express    	= require("express"),
    app        	= express(),
    bodyParser  = require("body-parser"),
    port       	= process.env.PORT || 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "./views");
app.set("view engine", "ejs");
// seedDB();

//ROOT ROUTE
app.get("/", function (req, res){
    res.render("thingWantingPerson");
});

//safety net redirect
app.get("*", function (req, res){
    res.redirect("/");
});

app.listen(port, function(err){
    console.log("Server is running on port " + port);
});
