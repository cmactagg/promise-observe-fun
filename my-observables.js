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
    });
  }

}
