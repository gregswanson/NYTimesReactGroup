var React 		= require('react');
var Query = require('../components/Search/Query');
var Results = require('../components/Search/Results');
var axios = require('axios');
var helpers = require('../utils/helpers');


// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Search = React.createClass({

	getInitialState: function() {
     return {
     		text: '',
 			begin: '',
 			end: '',
 			results: []
 		};},




 // 	update: function(){
 // 		this.setState({
	// 				text: 'the text has changed'
		
	// 	 		})
 	
	// 	console.log("MOUNTED", helpers.text);
	// 	// helpers.getGithubInfo(this.props.params.username)
	// 	// 	.then(function(data){
	// 	// 		this.setState({
	// 	// 			bio: data.bio,
	// 	// 			repos: data.repos
	// 	// 		})
	// 	// 	// This bind function allows us to reference the higher level this 
	// 	// 	// and not the "this" in the smaller context function.
	// 	// 	}.bind(this))
	// },

	//  searchFunc: function(e){
	//  	e.preventDefault();
	//  	var searchData = {};
	//     var topic = this.refs.topic.value;
	//     var start = this.refs.start.value;
	//     var end = this.refs.end.value;
	//     var searchData = {
	//     	topic: topic,
	//     	start: start,
	//     	end: end
	//     };

	 //    helpers.handleSubmit(searchData);
	 //    // var start = this.state.text.trim();
	 //    // var send = this.state.text.trim();
	 //    // 	console.log(searchData);
	 //      return;
	 // },


     // updateState: function(){
     // 	//state = 
     // }, 

	render: function(){
		
		// Return and parenthesis needs to be on same line.
		/*this.props.children will get replaced by the active component which will be our home component*/
		/*This is because the "home.js" file is inside of the main component*/

		return (
			<div>
			<Query onUpdate={this.onUpdate} />
			<Results results={this.state.results} />
			</div>
		)
	},

	onUpdate: function(searchData){
		// alert(searchData.text);
		// console.log("onUpdate");
		// console.log(searchData);
		axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchData.text +'&begin_date='+ searchData.begin +'0101&end_date='+ searchData.end +'0101&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931')
  			.then(function (response) {
    		console.log(response.data.response.docs[1].pub_date);
        //Search.update();
        //alert("Helper");
        // console.log("response");
        // console.log(response.data.response.docs);
      	this.setState({
 			results: response.data.response.docs
      	})
        
        //this.setState({text: response.data.response.docs[1].pub_date}).bind(this);
        console.log(this.state.result)
  		
  		}.bind(this));
  		

		//console.log("MOUNTED");
		//console.log(arr);
	}
  
});


// Tell it which component to render and where we will render it to.
// Then we run webpack -w
// We dont want Main being the central render
// Whenever we require Main we'll get this component
module.exports = Search; 