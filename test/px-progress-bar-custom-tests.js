// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-progress-bar', function() {
    test('Check initial value of progress bar', function(done){
      var progEl = Polymer.dom(document).querySelector('px-progress-bar');
      assert.equal(progEl.value, '0');
      done();
    });

    /*test('Clicking px-progress-bar increments the counter', function(done){
      var counterEl = Polymer.dom(document).querySelector('px-progress-bar'),
          counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
      assert.equal(counterValueEl.textContent, '0');

      counterEl.click();
      flush(function(){
        assert.equal(counterValueEl.textContent, '1');
      });
      done();
    });*/
  });
}
