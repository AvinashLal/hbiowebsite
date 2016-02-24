
Template.addBoardMember.events({
  'submit .add-new-member-form':function(event, template) {
    event.preventDefault();
    var member = {
       name: template.$('[name=name]').val(),
       bio: template.$('[name=bio]').val(),
       photo: template.$('[name=photo]').val(),
       committee: template.$('[name=committee]').val(),
       position: template.$('[name=position]').val(),
       year: template.$('[name=year]').val()
    };


    Meteor.call('addBoardMember', member, function(err, data) {
      if (err) {
        alert(err.reason);
      }
      else {
        alert('Created Board Member');
      }
    });
  }
});
