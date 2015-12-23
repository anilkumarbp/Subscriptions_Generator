#! /usr/bin/env node


(function() {


// Require RCSDK
var RCSDK = require('rcsdk');
var fs = require('fs');
var extensions = [];
var rcsdk = new RCSDK({
	server: 'https://platform.devtest.ringcentral.com', // https://platform.ringcentral.com ( Production )
	appKey: 'enter app Key',
	appSecret: 'enter app Secret'
});

// constructor
var RingCentral = module.exports = function RingCentral(options) {
    options = options || {};

    // Instance of RC Platform Singleton
    this.platform = rcsdk.getPlatform();
    this.log = rcsdk.getLog();

    // RC Auth
    this.auth = null;

    return this;
}

//Platform Singleton
var platform = rcsdk.getPlatform();


// Authenticate
platform.authorize({
	username: 'username',            // Enter the usernmae
	extension: 'extension',          // Enter the extension
	password: 'password',            // Enter the password
	remember: 'true'
}).then(function(response){
	// platform.getAuthData
	// console.log("Yay, I'm Authorized");
    platform.auth = response.json;
    console.log('Authentication success');
    console.log(JSON.stringify(response.data, null, 2));

  // ********** Retreive Extensions ********************
    // retreive all the extensions for this account
   platform.get('/account/~/extension/')
            .then(function(response){
              
              var apiresponse = response.json;
              for(var key in apiresponse.records) {
                var extension_number = "";

                if (apiresponse.records[key].hasOwnProperty('extensionNumber')) {
                    extension_number = parseInt(apiresponse.records[key].id);
                    extensions.push(['/account/~/extension/' + extension_number + '/presence']);
                }
            }
            
            // Create a subscription
                var subscription = rcsdk.getSubscription();
             
                subscription.setEvents(extensions);

                subscription.on(subscription.events.notification, function(msg) {
                console.log(JSON.stringify(msg));
                });
             
                return subscription.register();

          })
          .then(function(response) {
                console.log('Subscription success');
                console.log(JSON.stringify(response.data, null, 2));;
          })
          .catch(function(e){
            console.error('Error ' + e.stack);
          });

   })
   .catch(function(e){
    console.error('Error ' + e.stack);
  });
   

  }) ();       
