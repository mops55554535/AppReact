import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it.only('переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it.only('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it.only('переход на несуществующий маршрут', () => {
            cy.visit('/aaddadadadad');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it.only('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it.only('переход на страницу списка статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
