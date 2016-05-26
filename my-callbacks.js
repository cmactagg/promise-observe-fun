exports = module.exports = function(){
  var obj = new MyCallbacks();
  return obj;
}

function MyCallbacks() {
  
  
  
  this.runCallback = function(callback)
  {
    console.log("inside runCallback");
    callback();
  }
}