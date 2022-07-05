// verbo/metodo - endpoint - motivo (request) - extensão
/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/change-book.json')

function changeBook(idBook) {
    //cy.request - client http
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        herders: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })
}

export { changeBook};


