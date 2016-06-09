var React = require('react');

var helpers = require('../../utils/helpers');


// Here we create a component to hold the repos informatino
var Query = React.createClass({
	
	getInitialState: function() {
 //    etInitialState: function() {
     return {
     		topic: '',
 			start: '',
 			end: ''
 		};},
	 
	 setQuery: function(newQuery, newStart, newEnd){


	 },  

	 // searchFunc: function(e){
	 // 	e.preventDefault();
	 // 	var searchData = {};
	 //    var topic = this.refs.topic.value;
	 //    var start = this.refs.start.value;
	 //    var end = this.refs.end.value;
	 //    var searchData = {
	 //    	topic: topic,
	 //    	start: start,
	 //    	end: end
	 //    };

	 //    helpers.handleSubmit(searchData);
	 //    // var start = this.state.text.trim();
	 //    // var send = this.state.text.trim();
	 //    // 	console.log(searchData);
	 //      return;
	 // },

	//  handleSubmit: function(searchData) {
		
	// 	axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchData.topic +'&begin_date='+ searchData.start +'0101&end_date='+ searchData.end +'0101&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931')
 //  			.then(function (response) {
 //    		console.log(response.data.response.docs[1].pub_date);
 //        //Search.update();
 //        alert("Helper");
 //        Search.update();
 //        //this.setState({text: response.data.response.docs[1].pub_date}).bind(this);

 //    		return 
 //  		})
 //  		.catch(function (response) {
 //    	//console.log(response);
 //  	});

	// 	//console.log("MOUNTED");
	// 	//console.log(arr);
	// },

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
									<button type="submit" className="btn btn-danger" onClick={this.update}><h4>Submit</h4></button>
								</div>
							</form>

						</div>
					</div>
			</div>
		</div>
		)
	},

	update: function()
    {
    	//preventDefault();
		//var searchData = {};
        var topic = this.refs.topic.value;
	    var start = this.refs.start.value;
	    var end = this.refs.end.value;
	    var searchData = {
	    	topic: topic,
	    	start: start,
	    	end: end
	    };

        this.props.onUpdate(searchData);
    }
});

/*We then export the Repos component*/
module.exports = Query;