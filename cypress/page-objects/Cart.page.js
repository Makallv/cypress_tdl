class CartPage{

    static get checkoutButton(){
        return cy.get('#checkout');
    }
}

export default CartPage;