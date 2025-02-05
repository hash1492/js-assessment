exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj, obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    var arr = [];
    for(key in obj){
      if(obj.hasOwnProperty(key)){
        arr.push(key + ": " + obj[key]);
      }
    }
    return arr;
  }
};
