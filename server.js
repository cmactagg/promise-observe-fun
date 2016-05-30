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

// myObservables.runObservable().subscribe(value => console.log(value), error => console.log(error.message), complete => console.log("done"));

// myObservables.runObservable().subscribe(value => console.log(value), error => console.log(error.message), complete => console.log("done1"));

// myObservables.deferObs().subscribe(value => console.log(value), error => console.log(error.message), complete => console.log("done2"));

// myObservables.deferObs().subscribe(value => console.log(value), error => console.log(error.message), complete => console.log("done3"));

// myObservables.seqStuff().subscribe(
//   val => console.log(val),
//   err => console.log(err.message),
//   () => console.log("done")
// );



var subject = new Rx.BehaviorSubject();

subject.next('old value');
subject.next('before subscription');

subject.subscribe(function(val) {
  console.log(val);
});

subject.next('after subscription');



console.log("END");