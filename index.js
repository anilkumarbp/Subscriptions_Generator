#! /usr/bin/env node


(function() {


// Require RCSDK
var callrecording;
var RCSDK = require('rcsdk');
var rcsdk = new RCSDK({
	server: 'https://platform.devtest.ringcentral.com',
	appKey: '',
	appSecret: ''
});

//Platform Singleton
var platform = rcsdk.getPlatform();

// console.log("Login API");
// console.log("------------");
// Authorize
platform.authorize({
	username: '',
	extension: '',
	password: '',
	remember: 'true'
}).then(function(response){
	console.log("Yay, I'm Authorized");
	callLog();
	// downloadRecordings();
				console.log("inside downaloads");
				// console.log("callrecording:"+this.callrecording);
				console.log("Inside : call recording value :"+this.callrecording);
				var json = JSON.parse(this.callrecording);
                var len = json.records.length;
                console.log("length:"+len);
                for(i=0;i<len;i++) {


                      if(json.records[i].hasOwnProperty('recording')){
                                    var uri = json.records[i].recording.contentUri;
                                    // alert('The recording URI is:'+ uri);
                                    console.log('The Value of URI is'+ uri);
                                    var url = uri.replace (/^[a-z]{5}\:\/{2}[a-z]{1,}\.[a-z]{1,}\.[a-z]{1,}\.[a-z]{1,}\:[0-9]{1,4}\/{1}[a-z]{1,}\/{1}[a-z]{1,}.\.0(.*)/, '$1');
                                    console.log('Replaced URI'+ url);
                                    

                                    platform.get(url).then(function(response){
                                        // response.setHeader('Content-Type':'audio/x-wav');
                                        alert('Success: ' + response.data);
                                        var donwloadLink = document.getElementById("download_call_recordings");
                                        donwloadLink.href = "data:audio/mpeg;base64,"+btoa(response.data);
                                        // var donwloadLink = btoa()
                                        console.log(response.data);
                                        console.log(donwloadLink.href);
                                        // console.log()
                                        // alert('Response Header' + response.);
                                    }).catch(function(e){
                                        alert('Error' + e.message);
                                    });

                             
                        }
                }

}).catch(function(e){
	console.log(e.message || 'Server cannot authorize the user');
})

// console.log("Call-log API");
// console.log("------------");
// Retreive call logs
function callLog() {
	rcsdk
         .getContext()
         .getPromise()
         .all([
                platform.get('/account/~/extension/~/call-log').then(function(response) {
       			console.log('Success: ' + response.data.uri.toString());
       			var txt=JSON.stringify(response.data, null, 2);
 				// alert('txt json')
                this.callrecording = txt;
                // console.log(this.callrecording);		
                // alert('The JSON array is' + callrecording.toString());
                console.log('The Value of callrecording string is'+this.callrecording);
                // downloadRecordings();
                // document.getElementById("call-logs-text").innerHTML=txt;
                }).catch(function(e) {
                           console.log("error:"+e.message);
                })
             ]);
}

// function downloadRecordings() {
// 	// rcsdk
//  //         .getContext()
//  //         .getPromise()
//  //         .all([
// 				var json = JSON.parse(callrecording);
//                 var len = json.records.length;

//                 for(i=0;i<len;i++) {


//                       if(json.records[i].hasOwnProperty('recording')){
//                                     var uri = json.records[i].recording.contentUri;
//                                     // alert('The recording URI is:'+ uri);
//                                     console.log('The Value of URI is'+ uri);
//                                     var url = uri.replace (/^[a-z]{5}\:\/{2}[a-z]{1,}\.[a-z]{1,}\.[a-z]{1,}\.[a-z]{1,}\:[0-9]{1,4}\/{1}[a-z]{1,}\/{1}[a-z]{1,}.\.0(.*)/, '$1');
//                                     console.log('Replaced URI'+ url);
                                    

//                                     platform.get(url).then(function(response){
//                                         // response.setHeader('Content-Type':'audio/x-wav');
//                                         alert('Success: ' + response.data);
//                                         var donwloadLink = document.getElementById("download_call_recordings");
//                                         donwloadLink.href = "data:audio/mpeg;base64,"+btoa(response.data);
//                                         // var donwloadLink = btoa()
//                                         console.log(response.data);
//                                         console.log(donwloadLink.href);
//                                         // console.log()
//                                         // alert('Response Header' + response.);
//                                     }).catch(function(e){
//                                         alert('Error' + e.message);
//                                     });

                             
//                         }
//                 }
//              // ]);
// }

})();