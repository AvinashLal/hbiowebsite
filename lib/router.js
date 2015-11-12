
Blog.config({
  blogIndexTemplate: 'myBlogIndexTemplate', // '/blog' route
  blogShowTemplate: 'myShowBlogTemplate'    // '/blog/:slug' route
});


/**
 * Sets up the Global Router Configuration
 */

Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'layout'

});


/**
 * Main Router Code
 */
Router.map(function() {

  // The Layout Template of App
  this.route('home', {
    path: '/',
    action: function() {

        this.render();

    }
  });


  this.route('events', {
  	path: '/events',

  	action: function() {
  		this.render();
  	}

  });

  this.route('jobs', {
    path: '/jobs',
    action: function() {
      this.render();
    }
  });

  // Authentication Mechanisms
  this.route('signin', {
    path: '/signin',
    action: function() {
      this.render();
    }
  });

  this.route('join', {
    path: '/join',
    action: function() {
      this.render();
    }
  });

  // Admin Dashboard
  //this.route('dashboard');





});
