Router.route('/', function() {
	this.render('open');
});

Router.route('/customer', function() {
	this.render('maps');
});

Router.route('/agent', function() {
	this.render('login');
});

Router.route('/register', function() {
	this.render('register');
});