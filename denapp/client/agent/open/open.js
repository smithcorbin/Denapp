Template.open.events({
	"click #Customer": function(event, template) {
		Router.go("maps");
	},

	"click #Agent": function(event, template) {
		Router.go("agent");
	}
});
