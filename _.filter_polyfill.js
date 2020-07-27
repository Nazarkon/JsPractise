if (Array.prototype.filter === undefined) {
    Array.prototype.filter = function(fn) {
      var rv = [];
      
      for(var i=0, l=this.length; i<l; i++)
        if (fn(this[i])) rv.push(this[i]);
  
      return rv;
    };
  }
  
  const arr = ['1','2','3']
  
  arr.filter((elem) => elem == '2')