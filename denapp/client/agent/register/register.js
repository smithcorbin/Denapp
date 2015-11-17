Template.register.events({
	"click #Back": function(event, template) {
		Router.go("login");
	}

	"click #registerform": function(event, template) {
		Router.go("signup");
	}
});
