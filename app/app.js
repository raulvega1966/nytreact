// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

/*
this is for the routes.  Taken from myFirstRoute and SPAreact in class assignments.

we are using react-routers
*/

// Include the Route component for displaying individual routes
//var Route = router.Route;

// Include the main Main Component
var Main = require("./components/Main");

// Include the react-router module
//var router = require("react-router");

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
//var Router = router.Router;

 
// Reference the high-level components
//var routes = require('./config/routes');

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<main />, document.getElementById("app"));



 