SmoothScroller.defaults.speed = 0;

suite('smooth-scroller', function() {
  test('function exists', function() {
    assert.equal(typeof $.fn.smoothScroller, 'function');
  });

  test('should scroll to element', function() {
    $('#bottom').smoothScroller();

    assert.equal($('body').scrollTop(), 1196);
  });

  test('should update hash', function() {
    $('#top').smoothScroller();

    assert.equal(document.location.hash, '#top');
  });

  test('should trigger event', function() {
    $('#bottom').smoothScroller({
      speed: 10
    }).on('smoothScrollerComplete', function() {
      assert.ok(true);
    });
  });

  test('should scroll passed element', function() {    
    $('#scroll2').smoothScroller({
      scrollEl: '.scrollableElement'
    });

    assert.equal($('.scrollableElement').scrollTop(), 1018);

    $('#scroll1').smoothScroller({
      scrollEl: '.scrollableElement'
    });

    assert.equal($('.scrollableElement').scrollTop(), 0);
  });
});
