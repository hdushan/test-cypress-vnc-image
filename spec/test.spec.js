describe('This is my test', () => {
  beforeEach(() => {
    cy.visit('http://www.google.com');
  });
  it('works fine', () => {
    cy.get('input').eq(1).type('hello');
  });
});
