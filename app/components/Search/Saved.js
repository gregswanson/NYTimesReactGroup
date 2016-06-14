var React = require('react');
var helpers = require('../../utils/helpers');

// Here we create a component for Saved component
var Saved = React.createClass({

	getInitialState: function() {
     return {
 			saved: []
 		};},

 	componentDidMount: function(){
		
		$.ajax({
		    method: "GET",
		    url: "/articles/",
	  	})
    	.done(function( data ) {
      //console.log(data);
      console.log("----Get-----");
      console.log(data);

      this.setState({
 			saved: data
      	});


  		}.bind(this));
		
      

		console.log(this.state);
     
	},	




	render: function(){
        var articles = this.state.saved.map(function(result, i){
            return(
                <li className="list-group-item" key={i} >
                    <h3>
                        <span><em>{result.title}</em></span>
                        <span className="pull-right" >
                          <a href={result.link} target="_blank"><button className="btn btn-default ">View Article</button></a>
                            
                        </span>
                    </h3>
                    <p>Date Published: {result.date}</p>
                </li>
            )
        });
        return(
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {articles}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

/*We then export the UserProfile component*/
module.exports = Saved;