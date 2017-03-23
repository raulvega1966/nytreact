// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

    // Here we set a generic state associated with the text being searched for
    //which are title, start year and end year
    getInitialState: function() {
        return { topic: "", startYear: "", endYear:"" };
    },

    // This function will respond to the user input
    handleChange: function(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        
        //this.setState({ term: event.target.value });
    },

    // When a user submits...
    handleSubmit: function() {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        //event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);
        //this.setState({ term: "" });
    },

    // Here we describe this component's render method
    render: function() {
        
        return(

      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Search</h2>
        </div>
        <div className="panel-body text-center">

            <form>
              <div className="form-group">
                <h4 className="">Topic</h4>
                <input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>
                <br />

                <h4 className="">Start Year</h4>
                <input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange} required/>
                <br />

                <h4 className="">End Year</h4>
                <input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} required/>
                <br />
                
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
              </div>

            </form>
        </div>
      </div>
    )
  }
});





// Export the component back for use in other files
module.exports = Form;


