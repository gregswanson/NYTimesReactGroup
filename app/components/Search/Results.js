var React = require('react');

// Here we create a component for UserProfile
var Results = React.createClass({
	render: function(){
		// Console.log the bio object
		console.log("Results", this.props);
		return(
		<div className="row">
			<div className="col-lg-12">

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong><i class="fa fa-list-alt"></i>  Results</strong></h1>

					</div>
					<div className="panel-body">
						<ul className="list-group">
						<li className="list-group-item">{this.props.data}</li>
						 	  
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