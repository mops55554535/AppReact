let profileId = '';
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getBytestId('ProfileCard.firstname').should('have.value', 'testuser');
    });

    it('И редактирует его', () => {
        const newName = 'new';
        const newLastName = 'lastname';
        cy.updateProfile(newName, newLastName);
        cy.getBytestId('ProfileCard.firstname').should('have.value', newName);
        cy.getBytestId('ProfileCard.lastname').should('have.value', newLastName);
    });
});
