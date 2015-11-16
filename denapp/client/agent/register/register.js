Template.register.events({
	"click #Back": function(event, template) {
		Router.go("login");
	}

	"click #register-form": function(event, template) {
		Router.go("signup");
	}
});
