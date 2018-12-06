var ejs = require('ejs')
	, partials = require('express-partials')
	, express = require('express')
	, app = express();

var routes = require('./routes/index.js');	
	
app.configure(function(){

	app.use(partials());
	app.engine('html', require('ejs').renderFile);
	
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
	
	app.use(express.bodyParser());
	app.use(express.methodOverride());

	app.use(express.logger());
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    
});

app.get('/', routes.main);
app.get('/contact', routes.contact);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});