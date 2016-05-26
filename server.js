console.log("START");
var myCallbacks = require('./my-callbacks.js')();
var myPromises = require('./my-promises.js')();
var myObservables = require('./my-observables.js')();
var Rx = require('rxjs/RX');

// myCallbacks.runCallback(function(){
//   console.log("run callback - callback");
// });

// myPromises.runPromise().then(function(){
//   console.log("run promise resolve");  
// }, 
// function(){
//   console.log("run promise reject");
// });

myObservables.runObservable().subscribe(value => console.log(value));


console.log("END");