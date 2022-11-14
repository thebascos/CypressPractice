describe('My Second Test', () => {
    it('My first test casae', () => {

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      // selenuim get hit url in browser, cypress get acts like findElment of selenium

      //cy.get('.products').as
      //Parent Child chaining 
     

      //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
      
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg =  $el.find('h4.product-name').text();
        console.log('textVeg', textVeg)
        if(textVeg.includes('Cashews')){

          $el.find('button').click()
        }
      })
      
    })
  })
