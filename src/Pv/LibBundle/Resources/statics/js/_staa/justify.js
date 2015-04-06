// #include './staa.js';

staa.justify = staa.justify || (function() {
  var doc = document;
  return function(options) {
    var container = typeof options.container == 'string'
        ? doc.querySelector(options.container)
        : options.container;
    if (!container) {
      return;
    }
    var items = container.querySelectorAll(options.items);

    var gap = options.gap || 0;
    window.addEventListener('resize', onResize);

    onResize();

    function onResize() {
      var containerWidth = container.offsetWidth;
      var itemWidth = items[0].offsetWidth;

      var perLine = Math.floor((containerWidth + gap) / (itemWidth + gap));
      var center = perLine < 3;
      if (center) {
        perLine = Math.floor((containerWidth - gap) / (itemWidth + gap));
      }
      var gapCount = center ? perLine + 1 : perLine - 1;
      var margin = (containerWidth - itemWidth * perLine) / gapCount;

      for (var i = 0, n = items.length; i < n; ++i) {
        items[i].style.marginLeft = (center || i % perLine)
            ? margin + 'px' : '0';
      }

      if (options.after) {
        options.after();
      }
    }
  };
})();
