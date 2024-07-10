describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('статьи успешно подгружаются', () => {
        cy.getBytestId('ArticleList').should('exist');
        cy.getBytestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
