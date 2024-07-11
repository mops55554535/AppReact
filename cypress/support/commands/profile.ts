export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};
export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '1212' },
        body: {
            id: '4',
            first: 'testuser',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'ulbi tv',
            avatar: 'https://avatars.githubusercontent.com/u/98737',
        },
    });
};
declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname?: string,
                lastname?: string,
            ): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
