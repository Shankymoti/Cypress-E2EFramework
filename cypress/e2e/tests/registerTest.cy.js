import {registerPage} from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe('Test automation', ()=>{
    // before( function(){
    //     cy.fixture('registerData.json').then(function(data){
    //         this.data =data;

    //     })
    // })
    it('register Flow', ()=>
{
    registerObj.openURL();
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLastName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectCheckbox()
    registerObj.clickOnContinue()

})
})