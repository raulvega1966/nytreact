// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { topic: "", startYear: "", endYear: "", results: [], savedArticles: [] };
  },





  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },


  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
        console.log("History", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postHistory(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },

  // This function allows childrens to update the parent.
  setTerm: function(topic, startYear, endYear) {
    this.setState({ topic: topic, startYear: startYear, endYear: endYear });
  },



  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Scrubber!</h2>
            <p className="text-center">
              <em>Search for and annotate articles of interest!</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results address={this.state.results} />

          </div>

        </div>

        <div className="row">

          <History history={this.state.history} />

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
