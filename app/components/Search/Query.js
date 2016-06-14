var React = require('react');

var helpers = require('../../utils/helpers');


// Here we create a component to hold the repos informatino
var Query = React.createClass({
	
	getInitialState: function() {
 
     return {
     		topic: '',
 			start: '',
 			end: ''
 		};},
	 
	 setQuery: function(newQuery, newStart, newEnd){


	 },  

	 

	render: function(){
        return(
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">
                            <strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong>
                        </h1>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <h4 className=""><strong>Topic</strong></h4>
                                <input type="text" className="form-control " id="search_topic" ref="text" />

                                <h4 className=""><strong>Start Year</strong></h4>
                                <input type="text" className="form-control " id="search_start" ref="begin"/>

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
        )
    },
    update:function(){
    	
        var text = this.refs.text.value;
        var begin = this.refs.begin.value;
        var end = this.refs.end.value;
        var searchData = {
            text: text,
            begin: begin,
            end: end
        };
        this.props.onUpdate(searchData);
    }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Query;