/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve preencher formulario', () => {
        cy.get('[type="text"]').type('Bilbo Baggins')
        cy.get('[type="email"]').type('bilbo@condado.com')
        cy.get('[type="tel"]').type('000000000')
        cy.get('button[type="submit"]').click()
    })

    it('Deve editar, adicionar novas informações e salvar', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Frodo Baggins')
        cy.get('[type="email"]').clear().type('frodo@condado.com')
        cy.get('[type="tel"]').clear().type('1111111')
        cy.get('.alterar').click()
    })

    it('Deve remover contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })

})


