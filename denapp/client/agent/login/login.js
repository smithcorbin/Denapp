Template.login.events({
	"click #login": function(event, template) {

	  Meteor.loginWithPassword(template.find("#login-username").value, template.find("#login-password").value,

		function(error) {
			if(error) {
				var used = Meteor.users.find({username: $('#login-username').val()}).count() > 0;
				document.getElementById('notifText').style.opacity='1.0'
				document.getElementById('notifText').style.visibility='visible'
				if(used) {
					$('#notifText').html("Incorrect Password");
				}else{
					$('#notifText').html("Incorrect Username");
				}
			    setTimeout(function(){
			      $('#notifText').animate({ opacity: 0 }, 1000, 'linear')
			    }, 3000);
			}else{
			    Router.go('home');
			}
		});
	},

	"click #forgot": function(evt, template) {
		Router.go("forgot");
	},

	"click #register": function(evt, template) {
		Router.go("register");
	},
});
