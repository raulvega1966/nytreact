// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({

    getInitialState: function() {
        return {
            title: "",
            date: "",
            url: "",
            results: []
        }
    },

// When a user clicks save article
  clickSave: function(result){
    this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);
  },



componentWillReceiveProps: function(nextProps){
    var that = this;
    var theResults = nextProps.results.map(function(search, i){
      var boundClick = that.clickSave.bind(that, search);
      return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank">{search.headline.main}</a><br />{search.pub_date}<br /><button type="button" className="btn btn-warning" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button></div>
    });

    this.setState({results: theResults});
  },




    // Here we render the function
    render: function() {
        return ( < div className = "panel panel-default" >
            < div className = "panel-heading" >
            < h3 className = "panel-title text-center" > Results < /h3> < /div> < div className = "panel-body text-center" >

            < p > { this.state.results } < /p>


            //<h1>Address:</h1>

            //<p>{this.props.address}</p>


            < /div> < /div>
        );
    }
});



// Export the component back for use in other files
module.exports = Results;
