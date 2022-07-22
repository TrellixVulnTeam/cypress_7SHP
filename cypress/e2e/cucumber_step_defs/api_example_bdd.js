import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('A list of users is available', ()=> {
    cy.request({
        method: 'GET', 
          url: 'https://reqres.in/api/users?page=2', 
          
            }).then( (result) => {
             
             expect(result.status).to.eq(200)
            let count = Object.keys(result.body.data).length;
             cy.log(count);
             assert.equal(count, 6, 'page size = 6')
             cy.wrap(result.body.data[0]).its('avatar').should('contain', '.jpg')



            })
});

When('I fetch a user', ()=>{

 cy.request({
        method: 'GET', 
          url: 'https://reqres.in/api/users/2', 
          
            })
});

Then ('display the response body to log',()=>{
    cy.request({
        method: 'GET', 
          url: 'https://reqres.in/api/users/2', 
          
            }).then( (result) => {
 				
              cy.log(result.body.data.first_name)
              let name = result.body.data.first_name;
              cy.wrap(name).as('name')
               })

});


Then ('name should be Janet',()=>{
    cy.get('@name').then(name => {
        expect(name).to.contain("Janet")
        assert.isString(name, 'type is string')
     });

});
When ('I update a user',()=>{
    cy.request({
        method: "PATCH",
        url: "https://reqres.in/api/users/2",
        body: {
       
            "name": "morpheus",
            "job": "zion resident"
  
        },
      }).then( (result) => { 
        
        cy.wrap(result).as('result')
         });

});

Then ('the user info is updated',()=>{
    cy.get('@result').then(result => {
        expect(result.body.name).to.contain("morpheus")
        expect(result.body.job).to.contain("zion resident")
     });

});
When ('I put a new user',()=>{
    cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users/2",
        body:{
            "name": "morpheus",
            "job": "zion resident"
        }
        }).then( (result) => {
 				
            cy.wrap(result).as('result_put')
           
           })
        
      });


Then ('the response code is 200',()=>{
    cy.get('@result_put').then(result => {
        expect(result.status).to.eq(200);
     });
 			   

});
