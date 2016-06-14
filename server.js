var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));

//database
//mongoose.connect('mongodb://localhost/mongoosescraper');
var mongodbUri = 'mongodb://greg:darien@ds013212.mlab.com:13212/heroku_w85mspxk';

mongoose.connect(mongodbUri);
var db = mongoose.connection;

db.on('error', function (err) {
console.log('Mongoose Error: ', err);
});
db.once('open', function () {
console.log('Mongoose connection successful.');
});

//schemas
var Article = require('./models/article.js');

//routes
app.get('/', function(req, res) {
  res.send(index.html);
});


app.post('/articles', function(req, res){
	var newArticle = new Article(req.body);

	newArticle.save(function (err) {
  		if (!err) console.log('Success!');
	});
 });







// app.get('/articles', function(req, res){
// 	Article.find({}, function(err, doc){
// 		if (err){
// 			console.log(err);
// 		} else {
// 			res.json(doc);
// 		}
// 	});
// });

////////// Get Notes ///////////

// app.get('/articles/:id', function(req, res){
// 	Article.findOne({'_id': req.params.id})
// 	.populate('note')
// 	.exec(function(err, doc){
// 		if (err){
// 			console.log(err);
// 		} else {
// 			res.json(doc);
// 		}
// 	});
// });



// ///////////////////////////////

// ///////remove note //////////
// app.post('/remove/:id', function(req, res){
	
// 	Note.find({ '_id': req.params.id }).remove().exec();
		
// 	});

// //////////////////////////////




//listen
app.listen(port, function() {
  console.log('App running on port ' + port);
});