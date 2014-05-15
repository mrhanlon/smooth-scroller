/*!
 * smooth-scroller - Javascript lib to handle smooth scrolling
 * v0.0.1
 * https://github.com/firstandthird/smooth-scroller
 * copyright First+Third 2014
 * MIT License
*/
//smooth-scroller.js

(function(window, $) {
  var SmoothScroller = function(el, options) {
    this.el = $(el);
    this.options = options;
  };

  SmoothScroller.prototype = {
    defaults: {
      speed: 400,
      ease: 'swing',
      scrollEl: 'body',
      offset: 0
    },
    init: function() {
      var options = $.extend({}, this.defaults, this.options);
      var el = this.el;

      console.log(options);
      $(options.scrollEl).animate({
        scrollTop: el.offset().top - $(options.scrollEl).position().top - options.offset
      }, options.speed, options.ease, function() {
        var hash = el.attr('id');

        if(hash.length) {
          if(history.pushState) {
            history.pushState(null, null, '#' + hash);
          } else {
            document.location.hash = hash;
          }
        }

        el.trigger('smoothScrollerComplete');
      });
    }
  };

  SmoothScroller.defaults = SmoothScroller.prototype.defaults;

  $.fn.smoothScroller = function(options) {
    return this.each(function() {
      new SmoothScroller(this, options).init();
    });
  };

  window.SmoothScroller = SmoothScroller;
}(window, jQuery));