// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var History = React.createClass({
  
getInitialState: function(){
    return {
      savedArticles: []
    }
  },

  clickDelete: function(result){
    this.props.deleteArticle(result);

  },


componentWillReceiveProps: function(nextProps){
    var that = this;
    console.log(nextProps);
    var myResults = nextProps.savedArticles.map(function(search, i){
      var boundClick = that.clickDelete.bind(that, search);
      return <div className="list-group-item" key={i}><a href={search.url} target="_blank">{search.title}</a><br />{search.date}<br /><button type="button" className="btn btn-success" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Delete</button></div>
    });

    this.setState({savedArticles: myResults});
  },




  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.history.map(function(search, i) {
            return (
              <p key={i}>{search.location} - {search.date}</p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
