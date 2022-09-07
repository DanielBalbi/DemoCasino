/* global cy */

describe('New User in page', function(){
  var mydata;
    beforeEach(function(){
        cy.visit('https://demo.casino/');
         cy.fixture('./example')
            .then(tests =>{
            this.mytests = tests;
            mydata = this.mytests;
          })
    });

  it('When user input data to sign up', function(){

// 1.- Click on Button that closes the help window for using the website
    cy.onclick(mydata.buttonClose);
// 2.- Click on Button Sign Up
    cy.onclick(mydata.buttonSignUp);
// 3.- Write the email box data     
    cy.towrite(mydata.inputEmail,mydata.textEmail);
// 4.- Check Terms & Conditions button  
    cy.onclick(mydata.buttonTerms);

///////////////////////Currency //////////////////////////////////    
// 5.- Click on Currency selector
    cy.onclick(mydata.selectCurrency);
// 6.- select a currency by name
   cy.towrite(mydata.inputCurrency,mydata.textCurrency);
// 7.- Send {enter} key
   cy.enter(mydata.inputCurrency);
///////////////////////////////////////////////////////////////

// 8.- Write the password data  
   cy.towrite(mydata.inputPassword,mydata.textPassword);
// 9.- Write the password confirm data  
   cy.towrite(mydata.inputPasswordConf,mydata.textPassword);

///////////////////////Secret Question //////////////////////////////////
// 10.- Click on Secret Question selector
    cy.onclick(mydata.selectSecretQ);
// 11.- select aSecret Question by number in list
    cy.onclick(mydata.selectMySecretQ); 
/////////////////////////////////////////////////////////////////////////

// 12.- Write the Answer to Secret Question   
    cy.towrite(mydata.inputAnswerSecretQ,mydata.textAnswerSecretQ);
// 13.- Write the Login data 
    cy.towrite(mydata.inputLogin,mydata.textLogin);
// 14.- Write the Address data 
    cy.towrite(mydata.inputAddress,mydata.textAddress);

///////////////////////Select Country //////////////////////////////////
// 15.- Click on Country selector  
    cy.onclick(mydata.selectCountry);
// 16.- select a Country by name    
    cy.towrite(mydata.inputCountry,mydata.textCountry);
// 17.- Send {enter} key    
    cy.enter(mydata.inputCountry);
////////////////////////////////////////////////////////////////////////

// 18.- Write the City data 
    cy.towrite(mydata.inputCity,mydata.textCity);
// 19.- Write the Post Code data 
    cy.towrite(mydata.inputPostCode,mydata.textPostCode);
// 20.- Write the Name data 
    cy.towrite(mydata.inputName,mydata.textName);
// 21.- Write the Sur Name data 
    cy.towrite(mydata.inputSurName,mydata.textSurName);    
// 22.- Write the Middle Name data 
    cy.towrite(mydata.inputMiddleName,mydata.textMiddleName);   

///////////////////////Select Gender //////////////////////////////////
// 23.- Click on Gender selector  
    cy.onclick(mydata.selectGender);
// 24.- select a Country by name     
    cy.towrite(mydata.inputGender,mydata.textGender);
// 25.- Send {enter} key  
    cy.enter(mydata.inputGender);
////////////////////////////////////////////////////////////////////////

// 26.- Write the Nick Name data  
    cy.towrite(mydata.inputNickName,mydata.textNickName); 
// 27.- Click on Button submit to save data of the user and close registration
    cy.onclick(mydata.buttonSubmit);

     cy.wait(40000)                  // the script waits up to 40 seconds for the arrival of the mail
    var res;                        // I create the variable res that will receive the data from the service
// 28.- Chech url contains "/user/confirm/email" to ensure change to the registration page
      cy.location('pathname').should('eq','/user/confirm/email');

// 29.- Call to web services in localhost:3051 to get the validation code        
      cy
      .request('POST', 'http://localhost:3051/new/', {
        usuemail : mydata.textEmail,
        usuclave: mydata.textPassword
        })
      .then( ({ body }) => {            // once i receive the data
        res = body;                     // I save the body in a variable res (response)
        cy.log(res.clave)               // Show the key on the screen
// 30.- select a Country by name     
      cy.towrite(inputValidationCode,res.clave);
      cy.onclick(mydata.buttonSubmit);
      cy.onclick(buttonSubmitValidation);
      })
})
});