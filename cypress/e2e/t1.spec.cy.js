describe('demo', () => {
	before(function() {
  // Steps before  tests
  //cy.visit('http://172.16.10.4:8082/jw')
    cy.visit('/')
    cy.wait(3000)
    cy.get('[id=j_username]').clear()
    cy.get('[id=j_username]').type(Cypress.env('user_id'));
    cy.get('[id=j_password]').clear()
    cy.get('[id=j_password]').type(Cypress.env('user_pass'));
    cy.get('[type=submit]').click()
    //cy.wait(8000)//explicit
   // cy.get('[data-test=submitIsVisible]', { timeout: 10000 }).should('be.visible');

});
  it('test_1', () => {
    
  //  cy.get(':nth-child(16) > .app-link').click()// open employee module
    cy.get(':nth-child(16) > .app-link',{timeout:30000}).should('be.visible').click()// open employee module
    cy.get(':nth-child(3) > .dropdown > .fas').click()//side menu open
    cy.get('#mCSB_1_container')//select EMP Management
  		.contains('Employee Management')
  		.click()
    cy.get('#mCSB_1_container')//select employee list option
  		.contains('Employee List')
  		.click()
  	cy.get('[title="add"]').click() //click add button in toolbar

  	cy.get('[id=subformenv_hrmEmployeeSecondary_firstName]').type('John')//enter first name
  	cy.get('[id=subformenv_hrmEmployeeSecondary_Lastname]').type('Doe')//enter last name
  	cy.get(':nth-child(8) > .k-widget > .k-picker-wrap > .k-select').click()//select DOB
  	cy.get('[id=subformenv_hrmEmployeeSecondary_dateObBirthNew_dateview]').type('{enter}')
  
  	cy.get('[id=subformenv_hrmEmployeeSecondary_serviceNumber]').type('800001')//emp id
  	cy.get('[id=subformenv_hrmEmployeeSecondary_cnic]').type('1234567890987')//cnic
  	cy.get('input[type="radio"]').check('NON FILER')//radio button tax filer
  	cy.get('input[type="radio"]').check('NO')//radio  button disability
  	cy.get('[name=subformenv_hrmEmployeeSecondary_factoryFkId_input]').type('APF')//dropdown factory
  	cy.get('[name=subformenv_hrmEmployeeSecondary_resourceTypeFkId_input]').type('CIVILIAN')//dropdown resource type
  	
  //	cy.get('[id=submit]').click()
  











  

  })
})
