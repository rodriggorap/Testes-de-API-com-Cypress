import * as PostBooks from '../requests/POSTBooks.request';

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        PostBooks.addBooks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Sobrenatural")
            expect(response.body.description).to.eq("Um Livro")
        })   
    });
});