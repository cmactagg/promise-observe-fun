var Rx = require('rxjs/RX');

exports = module.exports = function(){
  var obj = new MyObservables();
  return obj;
}

function MyObservables() {

  this.runObservable = function(){
    return Rx.Observable.create(function(observer) {
      console.log("inside runObservable");
      observer.next("it worked");
      
      observer.complete();
    });
  }
  
  this.deferObs = function(){
    return Rx.Observable.defer(this.runObservable());
  }
  
  var someval = "sadie"
  
  this.ofObs = function(){
    return Rx.Observable.of(someval, 2, 3, 4, 5);
  }
  
  this.seqStuff = function(){
    return seq([,,,,1,,,,2,,,,3]);
  }

}
