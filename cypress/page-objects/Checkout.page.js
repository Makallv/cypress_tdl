class CheckoutPage{

    static get firstName(){
        return cy.get('#first-name');
    }

    static get lastName(){
        return cy.get('#last-name');
    }

    static get postalCode(){
        return cy.get('#postal-code');
    }

    static get continueButton(){
        return cy.get('#continue');
    }

    static get checkoutButton(){
        return cy.get('#finish');
    }

    static get checkoutTitle(){
        return cy.get('.title');
    }

}

export default CheckoutPage;