import * as DeleteBooks from '../requests/DELETEBooks.request';
import * as GetBooks from '../requests/GETBooks.request';
import * as PostBooks from '../requests/POSTBooks.request';


describe('DELETE Books', () => {
    it('Deletar um Livro', () => {
        GetBooks.allBooks().then((resAllBooks) => {
            DeleteBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBoook) => {
                expect(resDeleteBoook.status).to.eq(200)
            })
        })
    });
});

describe('DELETE Books', () => {
    it('Criar e deletar um Livro', () => {
        PostBooks.addBooks().then((resAddBoook) => {
            DeleteBooks.deleteBook(resAddBoook.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    });
});