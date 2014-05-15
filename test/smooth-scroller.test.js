
suite('smooth-scroller', function() {
  test('function exists', function() {
    assert.equal(typeof $.fn.smoothScroller, 'function');
  });

  test('should scroll to element', function() {
    $('#bottom').smoothScroller({
      speed: 0
    });

    assert.equal($('body').scrollTop(), 1196);
  });

  test('should update hash', function() {
    $('#top').smoothScroller({
      speed: 0
    });

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
    $('#scroll1').smoothScroller({
      speed: 0,
      scrollEl: '.scrollableElement'
    });

    assert.equal($('.scrollableElement').scrollTop(), 1836);

    $('#scroll2').smoothScroller({
      speed: 0,
      scrollEl: '.scrollableElement'
    });

    assert.equal($('.scrollableElement').scrollTop(), 1450);
  });
});
