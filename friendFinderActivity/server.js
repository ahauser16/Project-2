// DEPENDENCIES
var express = require("express"); //framework in order to build server
var path = require("path"); //how you create paths from html pages through the server
var nodemon = require("nodemon"); //node module that resets server every time code is updated or changed

// SETS UP EXPRESS
var app = express(); //putting express function into an app
var PORT = process.env.PORT || 8080; //'process.eng.PORT' if there's a default port go to it but otherwise 8080

// EXPRESS DATA PARSING CAPABILITIES
//when displaying static HTML pages line 12 allows you to do that. we are giving access to our 'app/public' pages so once they are deployed be rendered
app.use(express.static('app/public')); 

//letting our code know how we want our code to use our data and how to return it to us...QUESTION FOR TA
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTER for HTML routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER provides a console if our server is up and running if we deside to run it
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});