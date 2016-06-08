/*Axios is a convenient NPM package for performing HTTP requests*/
var axios = require('axios');



/*This is how promises work... if I invoked the getRepos function
That will return the promiseObj which has a .then property on it.
The function that we pass into the .then will get invoked when the 
promise is resolved.

We call getRepos that returns a promise. When we fetch the data...
Then invoke this callback function and console.log(data).

Promises help us to avoid callbacks. 
*/
// var promiseObj = getRepos('tylermcginnis');
// promiseObj.then(function(data){

// 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchData.topic +'&begin_date='+ searchData.start +'0101&end_date='+ searchData.end +'0101&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931'
// });

// We need both to be invoked at the same time...
var helpers = {
	handleSubmit: function(searchData) {
		
		axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchData.topic +'&begin_date='+ searchData.start +'0101&end_date='+ searchData.end +'0101&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931')
  			.then(function (response) {
    		console.log(response.data.response.docs[1].pub_date);
        var handleInfo = response.data.response.docs[1].pub_date;
        //this.setState({text: response.data.response.docs[1].pub_date}).bind(this);

    		return {
            text: response.data.response.docs[1].pub_date
          }
  		})
  		.catch(function (response) {
    	console.log(response);
  	});

		//console.log("MOUNTED");
		//console.log(arr);
	}

};

// We export the helpers function
module.exports = helpers;