Template.layout.events({
	'click .logout': function(event) {
    event.preventDefault();
    
    Meteor.logout();
    
    // if we are on a private list, we'll need to go to a public one
    Router.go('home')
  }
});