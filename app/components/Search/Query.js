var React = require('react');

var helpers = require('../../utils/helpers');

// Here we create a component to hold the repos informatino
var Query = React.createClass({
	getInitialState: function() {
    return {author: '', text: ''};
	  },
	 searchFunc: function(e){
	 	e.preventDefault();
	 	var searchData = {};
	    var topic = this.refs.topic.value;
	    var start = this.refs.start.value;
	    var end = this.refs.end.value;
	    var searchData = {
	    	topic: topic,
	    	start: start,
	    	end: end
	    };

	    helpers.handleSubmit(searchData);
	    // var start = this.state.text.trim();
	    // var send = this.state.text.trim();
	    // 	console.log(searchData);
	      return;
	 },
	render: function(){

		// console log the query
		console.log("Query", this.props)
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
									<input type="text" className="form-control " id="search_topic" ref="topic"/>

									<h4 className=""><strong>Start Year</strong></h4>
									<input type="text" className="form-control " id="search_start" ref="start" />

									<h4 className=""><strong>End Year</strong></h4>
									<input type="text" className="form-control " id="search_end" ref="end"/>

								</div>

								
								<div className="pull-right">
									<button type="submit" className="btn btn-danger" onClick={this.searchFunc}><h4>Submit</h4></button>
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