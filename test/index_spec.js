describe('index', function() {
  it('first test', function() {
    expect(1).toEqual(1);
  });
  it('it should return "hello world"', function() {
      expect(displayMessage()).toBe('Hello, World!');
  });
});
