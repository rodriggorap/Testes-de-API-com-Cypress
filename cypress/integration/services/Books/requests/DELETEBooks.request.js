// verbo/metodo - endpoint - motivo (request) - extensão
/// <reference types="cypress" />

function deleteBook(idBook) {
    //cy.request - client http
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false
    })
}

export { deleteBook};