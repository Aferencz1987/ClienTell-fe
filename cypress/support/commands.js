Cypress.Commands.add('apiMutation', (mutations) => {
    cy.request({
        method:'POST',
        url:'https://clientell_be.onrender.com/graphql/graphql',
        body: { query : "mutation" + mutations }         
    })
})