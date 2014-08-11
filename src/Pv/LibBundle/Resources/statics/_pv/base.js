(function() {
  this.pv = this.pv || {};

  pv.provide = function(namespace) {
    var parts = namespace.split('.');
    var cur = window;

    for (var i = 0; i < parts.length; ++i) {
      if (!cur[parts[i]]) {
        cur[parts[i]] = {};
      }
    }
  };
})();
