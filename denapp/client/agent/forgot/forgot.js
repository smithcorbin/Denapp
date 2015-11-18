Template.forgot.events({
	"click #back": function( event, instance){
		$('#notif').hide();
		Router.go('back');
	}

});
