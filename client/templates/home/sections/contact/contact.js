
// Emails out when contact form is submitted correctly
Template.contact.events({

	'submit .contact': function(event, template) {
    event.preventDefault();
    var buttonWidth = template.$('#contact-form button').width();
		
		var buttonCopy = template.$('#contact-form button').html(),
			errorMessage = template.$('#contact-form button').data('error-message'),
			sendingMessage = template.$('#contact-form button').data('sending-message'),
			okMessage = template.$('#contact-form button').data('ok-message'),
			hasError = false;
		
		template.$('#contact-form button').width(buttonWidth);
		template.$('#contact-form .error-message').remove();
		
		template.$('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var errorText = $(this).data('error-empty');
				$(this).parent().append('<span class="error-message">'+errorText+'.</span>');
				$(this).addClass('inputError');
				hasError = true;
			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var invalidEmail = $(this).data('error-invalid');
					$(this).parent().append('<span class="error-message">'+invalidEmail+'.</span>');
					$(this).addClass('inputError');
					hasError = true;
				}
			}
		});
		
		if(hasError) {
			template.$('#contact-form button').html('<i class="icon-remove"></i>'+errorMessage);
			setTimeout(function(){
				template.$('#contact-form button').html(buttonCopy);
				template.$('#contact-form button').width('auto');
			},2000);
		}
		else {
			template.$('#contact-form button').html('<i class="icon-refresh icon-spin"></i>'+sendingMessage);
			


			
			Meteor.call('sendEmail',
            	'biotechassoc@gmail.com',
            	template.$('[name=email]').val(),
            	'New Email From' + template.$('[name=contactName]').val(),
            	template.$('[name=comments]').val());
			
			
			template.$('#contact-form button').html('<i class="icon-ok"></i>');
			setTimeout(function(){
					$('#contact-form button').html(buttonCopy);
					$('#contact-form button').width('auto');
			},2000);
				
			
			
		}
		
		return false;	
    
  }
});

