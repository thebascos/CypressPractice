describe('My First Test', () => {
    it('My first test casae', () => {

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      // selenuim get hit url in browser, cypress get acts like findElment of selenium
      cy.get('.product:visible').should('have.length',4)
      //cy.get('.products').as
      //Parent Child chaining 
      cy.get('.products').find('.product').should('have.length', 4)

      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg =  $el.find('h4.product-name').text();
        if(textVeg.includes('Cashews')){
          $el.find('button').click()
        }
      })
      //assert if logo text is corretly displayed.
      cy.get('.brand').should('have.text', 'GREENKART')

      // this is to print in logs
      cy.get('.brand').then(function(logoelement){
          cy.log(logoelement.text())
      })
      
    })
  })
