document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

// This is the wrapper for custom its, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder describe to place custom its in
  // Use itCase(options) for a more convenient setup of the it cases
  describe('px_progress_bar_1 is created and initialized correctly', function() {
    var progressBarFixture;
    beforeEach(function() {
      progressBarFixture = fixture('ValueBelowRange');
    });
    it('Check that fixture is created', function(done){
      assert.isDefined(progressBarFixture);
      done();
    });
    it('Check that px_progress_bar_1 has Value attribute', function(done){
      assert.isDefined(progressBarFixture.value);
      done();
    });
    it('Check initial value of progress bar', function(done){
      assert.equal(progressBarFixture.value, '-10');
      done();
    });
    it('Check width of progress bar fill', function(done){
      assert.equal(progressBarFixture.$$('#fill').style.transform, 'scaleX(0)');
      done();
    });
  });
  describe('px_progress_bar_2 is created and initialized correctly', function() {
    var progressBarFixture;
    beforeEach(function() {
      progressBarFixture = fixture('ValueInRange');
    });
    it('Check that fixture is created', function(done){
      assert.isDefined(progressBarFixture);
      done();
    });
    it('Check that px_progress_bar_2 has Value attribute', function(done){
      assert.isDefined(progressBarFixture.value);
      done();
    });
    it('Check initial value of progress bar', function(done){
      assert.equal(progressBarFixture.value, '80');
      done();
    });
    it('Check width of progress bar fill', function(done){
      assert.equal(progressBarFixture.$$('#fill').style.transform, 'scaleX(0.8)');
      done();
    });
  });
  describe('px_progress_bar_3 is created and initialized correctly', function() {
    var progressBarFixture;
    beforeEach(function() {
      progressBarFixture = fixture('ValueInfinite');
    });
    it('Check that fixture is created', function(done){
      assert.isDefined(progressBarFixture);
      done();
    });
    it('Check that px_progress_bar_3 has Value attribute', function(done){
      assert.isDefined(progressBarFixture.value);
      done();
    });
    it('Check initial value of progress bar', function(done){
      assert.equal(progressBarFixture.value, '120');
      done();
    });
    it('Check width of progress bar fill', function(done){
      assert.equal(progressBarFixture.$$('#fill').style.transform, 'scaleX(1)');
      done();
    });
  });
  describe('custom min and max', function() {
    var progressBarFixture;
    beforeEach(function() {
      progressBarFixture = fixture('CustomMinMax');
    });
    it('calculates the right ratio based on the min, max, and value', function() {
      assert.equal(progressBarFixture._ratio.toFixed(2), '0.79');
    });
  });
}
