var React = require('react');

// Here we create a component for UserProfile
var Results = React.createClass({
	getInitialState: function() {
     return {
 			results: []
 		};},

	render: function(){
		// Console.log the bio object
		//console.log("Results", this.props);
		var results = this.props.results.map(function(result, index){
		return(
			<li className="list-group-item" index={index}>
				<h3>
					<span><em>{result.headline.main}</em></span>
					<span className="btn-group pull-right" >
						<button className="btn btn-default ">View Article</button>
						<button className="btn btn-primary">Save</button>
					</span>
				</h3>
				<p>Date Published: {result.pub_date}</p>
			</li>
			)
		});

		return(
		<div className="row">
			<div className="col-lg-12">

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong><i class="fa fa-list-alt"></i>  Results</strong></h1>

					</div>
					<div className="panel-body">
						<ul className="list-group">
						{results}
						</ul>					
					</div>
				</div>

			</div>
		</div>
		)
	}
});

/*We then export the UserProfile component*/
module.exports = Results;