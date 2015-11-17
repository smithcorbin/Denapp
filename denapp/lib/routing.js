Router.route('/', function() {
	this.render('open');
});

Router.route('/maps', function() {
	this.render('maps');
});

Router.route('/agent', function() {
	this.render('login');
});

Router.route('/register', function() {
	this.render('register');
});

Router.route('/forgot', function() {
	this.render('forgot');
});

Router.route('/back', function() {
	this.render('login');
});

Router.route('/home', function() {
	this.render('open');
});
