exports = module.exports = function(){
  var obj = new MyPromises();
  return obj;
}

function MyPromises() {

  this.runPromise = function(){
    return new Promise(function(resolve, reject) {
      console.log("inside runPromise");
      resolve();
    });
    
  } 

}

