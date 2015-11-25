Meteor.subscribe('users');

Template.register.rendered = function() {

    $('#register-confirm-password').addClass("invalid");
    $('#register-password').addClass("invalid");
    $('#register-email').addClass("invalid");
    $('#register-lName').addClass("invalid");
    $('#register-fName').addClass("invalid");

    uFlag = false;
    eFlag = false;
    pFlag = false;
    cFlag = false;
    pwFlag = false;

    $('#register-email').on('input', function(){
	var input=$(this).val();
	var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
	var Notused = Meteor.users.find({"profile.oh": input }).count() == 0;
	oh = re.test(input);
	eFlag = oh && Notused;
	if(eFlag){
	    $(this).removeClass("invalid").addClass("valid");
	}else{
	    $(this).removeClass("valid").addClass("invalid");
	    if(!Notused){
		$('#notif').html("This Email is Already in Use");
		document.getElementById('notif').style.opacity='1.0'
		document.getElementById('notif').style.visibility='visible'
	    setTimeout(function(){
	      $('#notif').animate({ opacity: 0 }, 1000, 'linear')
	    }, 3000);
	    }
	}
    });


    $('#register-password').on('input', function(){
	var input=$(this).val();
	var input2=$('#register-confirm-password').val();

	pwFlag = (input === input2) && input.length > 0;

	if(pwFlag){
	    $('#register-confirm-password').removeClass("invalid").addClass("valid");
	    $(this).removeClass("invalid").addClass("valid");
	}else{
	    $('#register-confirm-password;).removeClass("valid").addClass("invalid");
	    $(this).removeClass("valid").addClass("invalid");
	    if(input.length > 0){
		$('#notif').html("Passwords Do Not Match");
		document.getElementById('notif').style.opacity='1.0'
		document.getElementById('notif').style.visibility='visible'
	    setTimeout(function(){
	      $('#notif').animate({ opacity: 0 }, 1000, 'linear')
	    }, 3000);
	    }
	}
    });

    $('#signup-confirm-password').on('input', function(){
	var input=$(this).val();
	var input2 = $('#register-password').val();

	pwFlag = (input === input2) && input.length > 0;

	if(pwFlag){
	    $(this).removeClass("invalid").addClass("valid");
	    $('#register-password').removeClass("invalid").addClass("valid");
	}else{
	    $(this).removeClass("valid").addClass("invalid");
	    $('#register-password').removeClass("valid").addClass("invalid");
	    if(input.length > 0){
		$('#notif').html("Passwords Do Not Match");
		document.getElementById('notif').style.opacity='1.0'
		document.getElementById('notif').style.visibility='visible'
	    setTimeout(function(){
	      $('#notif').animate({ opacity: 0 }, 100, 'linear')
	    }, 3000);
	    }
	}
    }); 

Template.register.events({
	"click #register-form": function(event, template) {
	  event.preventDefault();
		if(uFlag && eFlag && pFlag && cFlag && pwFlag){
	
		Accounts.createUser({
		email: template.find("#register-email").value,
		password: template.find("#register-password").value,

		}, function(error) {
		  if (!error) {
		    Router.go('thanks');
		  }
		});
		
		}else{
		    if(!eFlag){
			$('#notif').html("Please Provide a Valid Email");
			document.getElementById('notif').style.opacity='1.0'
			document.getElementById('notif').style.visibility='visible'
		    setTimeout(function(){
		      $('#notif').animate({ opacity: 0 }, 1000, 'linear')
		    }, 3000);
		    }

		    if(!pwFlag){
		      $('#notif').html("Please Create and Confirm your Password");
		      document.getElementById('notif').style.opacity='1.0'
		      document.getElementById('notif').style.visibility='visible'
		    setTimeout(function(){
		      $('#notif').animate({ opacity: 0 }, 1000, 'linear')
		    }, 3000);
		    }
		}
	},

	"click #back": function(event, instance) {
		Router.go("back");
	}
});
