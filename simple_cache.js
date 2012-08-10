  var Cache = function(key) {
    this.key = key;
    
    this.get = function() {
      return JSON.parse(localStorage.getItem(this.key));
    };
    
    this.set = function(string) {
      localStorage.setItem(this.key, JSON.stringify(string));
    };

    this.unset = function() {
      localStorage.removeItem(this.key);
    };
  };

  return Cache;
