

Cypress.Commands.add('onclick', (myelement) => { 
    cy.get(myelement).click();
});

Cypress.Commands.add('towrite', (myelement,data) => { 
    cy.get(myelement).type(data);
})

Cypress.Commands.add('enter', (myelement) => { 
    cy.get(myelement).type('{enter}');
})