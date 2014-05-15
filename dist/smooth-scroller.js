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
    var defaults = {
      speed: 400,
      ease: 'swing',
      scrollEl: 'body',
      offset: 0
    };

    var el = $(this);

    options = $.extend(defaults, options);

    $(options.scrollEl).animate({
      scrollTop: el.offset().top  - options.offset
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
}(jQuery));