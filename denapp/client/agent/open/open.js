Template.open.events({
	"click #Customer": function(event, template) {
		Router.go("customer");
	},

	"click #Agent": function(event, template) {
		Router.go("agent");
	}
});
