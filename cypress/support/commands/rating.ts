export const setRate = (starsCount: number, feedback:string) => {
    cy.getBytestId(`StarRating.${starsCount}`).click();
    cy.getBytestId('RatingCard.Input').type(feedback);
    cy.getBytestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
      interface Chainable {
        setRate(starsCount: number, feedback:string): Chainable<void>
      }
    }
  }
