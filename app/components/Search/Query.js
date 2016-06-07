var React = require('react');

// Here we create a component to hold the repos informatino
var Query = React.createClass({
	getInitialState: function() {
    return {author: '', text: ''};
	  },
	  handleAuthorChange: function(e) {
	    this.setState({author: e.target.value});
	  },
	  handleTextChange: function(e) {
	    this.setState({text: e.target.value});
	  },
	  handleSubmit: function(e) {
	    e.preventDefault();
	    var author = this.state.author.trim();
	    var text = this.state.text.trim();
	    if (!text || !author) {
	      return;
	    }
	    // TODO: send request to the server
	    this.setState({author: '', text: ''});
  },
	render: function(){

		// console log the query
		console.log("Query", this.props.repos)
		return(
		<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i class="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
						</div>
						<div className="panel-body">


							<form>
								<div className="form-group">
									<h4 className=""><strong>Topic</strong></h4>
									<input type="text" className="form-control " id="search_topic" />

									<h4 className=""><strong>Start Year</strong></h4>
									<input type="text" className="form-control " id="search_start" />

									<h4 className=""><strong>End Year</strong></h4>
									<input type="text" className="form-control " id="search_end" />

								</div>

								
								<div className="pull-right">
									<button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
								</div>
							</form>

						</div>
					</div>
			</div>
		</div>
		)
	}
});

/*We then export the Repos component*/
module.exports = Query;