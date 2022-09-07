/* global cy */
describe('Find a Game', () => {
  var mydata;
    beforeEach(function(){
    
          cy.visit('https://demo.casino/');
           cy.fixture('./FindGame')
              .then(tests =>{
              this.mytests = tests;
              mydata = this.mytests;
            })
      });
 


  it('User read Terms & Conditions', () => {
        // 1.- Click on Button to open Terms & Conditions
        cy.onclick(mydata.buttonLearnMore);
        // 2.- Click on Button that closes the window Terms
        cy.onclick(mydata.buttonEndTerms);
  });

  it('User find games', () => {
        // 3.- Click on Button to open a page about find games
        cy.onclick(mydata.buttomGameList);
  });  
});
 