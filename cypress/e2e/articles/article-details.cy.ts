let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Сожержимое статьи', () => {
        cy.getBytestId('ArticleDetails.Info').should('exist');
    });
    it('список рекомендаций', () => {
        cy.getBytestId('ArticleRecommendationsList').should('exist');
    });
    it('оставляет комментарий', () => {
        cy.getBytestId('ArticleDetails.Info');
        cy.getBytestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getBytestId('CommentCard.Content').should('have.length', 1);
    });
    it('оставляет оценку комментария (мок)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });

        cy.getBytestId('ArticleDetails.Info');
        cy.getBytestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
