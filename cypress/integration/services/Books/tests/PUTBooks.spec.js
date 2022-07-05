import * as PutBooks from '../requests/PUTBooks.request';
import * as GetBooks from '../requests/GETBooks.request';
import * as PostBooks from '../requests/POSTBooks.request';

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GetBooks.allBooks().then((resAllBooks) => {
            PutBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Sobrenatural altrado');
            })
        })
    });

    it('Criar e alterar um livro', () => {
        PostBooks.addBooks().then((resAddBook) => {
            PutBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                cy.log(resAddBook.body.title);
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Sobrenatural alterado');
                cy.log(resChangeBook.body.title);
            })
        })
    });
    
});

