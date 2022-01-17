describe('Teste: criar um novo produto', () => {
    it('cria um novo produto', () =>{
        cy.visit('/');
        cy.viewport(320, 640);
        cy.get('.sc-gWXbKe').click();
        cy.get(':nth-child(1) > .sc-bqiRlB').click().type('teste');
        cy.get(':nth-child(2) > .sc-bqiRlB').click().type(5);
        cy.get(':nth-child(3) > .sc-bqiRlB').click().type(5);
        cy.get(':nth-child(4) > .sc-bqiRlB').click().type(5);
        cy.get(':nth-child(5) > .sc-bqiRlB').click().type(5);
        cy.get(':nth-child(6) > .sc-bqiRlB').click().type(123456789101112);
        cy.get('.sc-hBUSln').select(['Informática']);
        cy.get(':nth-child(8) > .sc-bqiRlB').click().type(5);
        cy.get(':nth-child(9) > .sc-bqiRlB').click().type('2021-12-25');
        cy.fixture('tshirt.jpg').then( fileContent => {
            cy.get(':nth-child(10) > .sc-bqiRlB').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'tshirt.jpg',
            });
        });
        cy.get('.sc-fotOHu').click().type('description');
        cy.get('.sc-ieecCq').click();
        cy.get(':nth-child(4) > .sc-hKwDye').should('be.visible');
        cy.get(':nth-child(4) > .sc-hKwDye > :nth-child(2) > .sc-jRQBWg').contains('test').should('be.visible');
    });
    it('verifica dados do novo produto', () => {
        cy.viewport(320, 640);
        cy.get(':nth-child(4) > .sc-hKwDye > :nth-child(2) > .sc-jRQBWg').click();
        cy.get('.sc-furwcr').should('be.visible');
        cy.get('.sc-furwcr').should('be.visible');
        cy.get('.sc-ikJyIC').scrollTo(0,500);
        cy.get('.sc-kDTinF').contains('description').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(1) > :nth-child(1)').contains('Altura: 5').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(1) > :nth-child(2)').contains('Largura: 5').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(1) > :nth-child(3)').contains('Comprimento: 5').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(2) > :nth-child(1)').contains('Adicionado em: 2021-12-25').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(2) > :nth-child(2)').contains('Código: 123456789101112').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(2) > :nth-child(2)').contains('Código: 123456789101112').should('be.visible');
        cy.get('.sc-jrQzAO > :nth-child(2) > :nth-child(3)').contains('Valor: R$ 5,00').should('be.visible');
    })
});

describe('Teste: editar um produto existente', () => {
    it('Seleciona um produto e verifica se o button de edição foi habilitado', () => {
        cy.get(':nth-child(4) > .sc-hKwDye > .sc-eCImPb').click();
        cy.get('.sc-cidDSM').click();
        cy.get('.sc-iUKqMP').should('be.visible');
        cy.get('.sc-cTAqQK > img').click();
    });
    it('Abre o card que edita o produto', () => {
        cy.get(':nth-child(4) > .sc-hKwDye > .sc-eCImPb').click();
        cy.get('.sc-cidDSM').click();
        cy.get('.sc-iUKqMP').should('be.visible');
        cy.get('.sc-jObWnj').click();
    });
    it('Verifica dados do produto a ser editado', () => {
        cy.get(':nth-child(1) > .sc-bqiRlB').should('have.value','teste');
        cy.get(':nth-child(2) > .sc-bqiRlB').should('have.value', 5);
        cy.get(':nth-child(3) > .sc-bqiRlB').should('have.value', 5);
        cy.get(':nth-child(4) > .sc-bqiRlB').should('have.value', 5);
        cy.get(':nth-child(5) > .sc-bqiRlB').should('have.value', 5);
        cy.get(':nth-child(6) > .sc-bqiRlB').should('have.value', 123456789101112);
        cy.get('.sc-hBUSln').should('have.value', 'Informática');
        cy.get(':nth-child(8) > .sc-bqiRlB').should('have.value', 5);
        cy.get(':nth-child(9) > .sc-bqiRlB').should('have.value', '2021-12-25');
        cy.get('.sc-fotOHu').should('have.value', 'description');
    });
    it('Edita o produto', () => {
        cy.get(':nth-child(1) > .sc-bqiRlB').click().clear();
        cy.get(':nth-child(1) > .sc-bqiRlB').click().type('editado');
        cy.get('.sc-ieecCq').click();
        cy.get(':nth-child(4) > .sc-hKwDye > :nth-child(2) > .sc-jRQBWg').contains('editado').should('be.visible');
    });
});

describe('Teste: Barra de pesquisa', () => {
    it('Pesquisar pelo nome "test"', () => {
        cy.get('.sc-gsDKAQ').click().type('editado');
        cy.get('.sc-jRQBWg').contains('editado').should('be.visible');
        cy.get('.sc-gsDKAQ').click().clear();
    });
});

describe('Teste: delete um produto existente', () => {
    it('Seleciona um produto e verifica se o button de deletar foi habilitado', () => {
        cy.get(':nth-child(4) > .sc-hKwDye > .sc-eCImPb').click();
        cy.get('.sc-cCcXHH').click();
        cy.get('.sc-giYglK').click();
    });
});

describe('Teste: selecionar todos os produtos', () => {
    it('Seleciona todos os produtos', () => {
        cy.viewport(768, 640);
        cy.get('.sc-hiCibw').click();
        cy.get(':nth-child(1) > .sc-hKwDye > .sc-eCImPb').should('be.checked');
        cy.get(':nth-child(2) > .sc-hKwDye > .sc-eCImPb').should('be.checked');
        cy.get(':nth-child(3) > .sc-hKwDye > .sc-eCImPb').should('be.checked');
    });
    it('Deleta todos os produtos', () => {
        cy.viewport(768, 640);
        cy.get('.sc-cCcXHH').click();
        cy.get('.sc-giYglK').click();
    });
})





