// #include './staa.js';

staa.resp = staa.resp || (function() {
  var listeners = [];
  var win = window;

  function onResize() {
    var callOn = [];
    var callOff = [];
    var width = win.innerWidth;

    var i, n;
    var listener;

    for (i = 0, n = listeners.length; i < n; ++i) {
      listener = listeners[i];
      var enabled = true;
      if (listener.minWidth && width < listener.minWidth) {
        enabled = false;
      } else if (listener.maxWidth && width > listener.maxWidth) {
        enabled = false;
      }

      if (!!listener._enabled != enabled) {
        if (enabled && listener.on) {
          callOn.push(listener);
        } else if (listener.off) {
          callOff.push(listener);
        }
        listener._enabled = enabled;
      }
    }
    for (i = 0; i < callOff.length; ++i) {
      listener = callOff[i];
      listener.off.call(listener.handler);
    }
    for (i = 0; i < callOn.length; ++i) {
      listener = callOn[i];
      listener.on.call(listener.handler);
    }
  }

  return function(listener) {
    if (listeners.length == 0) {
      win.addEventListener('resize', onResize);
    }

    listeners.push(listener);
    onResize();
  }
})();
