describe('Nav Menus', () => {
  // For desktop view
  context('720p resolution', () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });
    describe('When you visit Server Side Rendered Posts', () => {
      it('Should visit Server Side Rendered Posts page', () => {
        cy.visit('/');
      });
      describe('nav', () => {
        it('Should navigate to Statically Rendered page', () => {
          cy.get('[data-cy=ssg-posts]').contains('SSG Posts').click();
          cy.url().should('include', '/static');
        });
      });
    });
  });
  context('iphone-5 resolution', () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport('iphone-5');
    });
    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });
      describe('HamBurger Menu', () => {
        it('Should open the HamBurger Menu', () => {
          cy.get('[data-cy=toggler]').click();
        });
        describe('nav', () => {
          it('Should navigate to Create Post Page', () => {
            cy.get('[data-cy=create-post]').contains('Create Post').click();
            cy.url().should('include', '/create');
          });
        });
      });
    });
  });
});
