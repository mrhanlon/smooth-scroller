/*!
 * smooth-scroller - Javascript lib to handle smooth scrolling
 * v0.0.1
 * https://github.com/firstandthird/smooth-scroller
 * copyright First+Third 2014
 * MIT License
*/

//smooth-scroller.js

(function($) {
  $.fn.smoothScroller = function(options) {
    options = $.extend({}, $.fn.smoothScroller.defaults, options);
    var el = $(this);

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

    return this;
  };

  $.fn.smoothScroller.defaults = {
    speed: 400,
    ease: 'swing',
    scrollEl: 'body',
    offset: 0
  };
}(jQuery));