#! /usr/bin/env node


(function() {


// Require RCSDK
    var RCSDK = require('ringcentral');
    var fs = require('fs');
    var extensions = [];
    var rcsdk = new RCSDK({
        server: 'https://platform.devtest.ringcentral.com', // https://platform.ringcentral.com ( Production )
        appKey: 'enter app Key',
        appSecret: 'enter app Secret'
    });


//Platform Singleton
    var platform = rcsdk.platform();


// Authenticate
    platform.login({
        username: 'username',            // Enter the usernmae
        extension: 'extension',          // Enter the extension
        password: 'password',            // Enter the password
        remember: 'true'
    }).then(function(response) {

            //platform.auth = response._json;
            console.log('**************** Authentication success ****************');
            console.log(JSON.stringify(response.json(), null, 2));


////********** Retreive Extensions ********************
            //retreive all the extensions for this account
            platform.get('/account/~/extension/')
                .then(function (response) {
                    var apiresponse = response.json();

                    console.log("**************** The extension list is : ****************", JSON.stringify(apiresponse, null, 2));

                    for (var key in apiresponse.records) {
                        var extension_number = "";

                        if (apiresponse.records[key].hasOwnProperty('extensionNumber') && apiresponse.records[key].type == "User") {
                            extension_number = parseInt(apiresponse.records[key].id);
                            extensions.push(['/account/~/extension/' + extension_number + '/presence?detailedTelephonyState=true']);
                            extensions.push(['/account/~/extension/' + extension_number + '/message-store']);
                        }
                    }

                    // Create a subscription
                    var subscription = rcsdk.createSubscription();

                    // Add Event Listeners
                    subscription.on(subscription.events.notification, function (msg) {
                        console.log("**************** Boom ! A new subscription notification, The JSON is : ****************",JSON.stringify(msg, null, 2));
                    });

                    return subscription.setEventFilters(extensions).register();
                })
                .then(function(response) {
                    console.log('Subscription success');
                    console.log(JSON.stringify(response.json(), null, 2));
                })
                .catch(function (e) {
                    console.error('Error ' + e.stack);
                });
        })
        .catch(function (e) {
            console.error('Error ' + e.stack);
        });

})();
