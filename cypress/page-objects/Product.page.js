class ProductPage {

    static get logoutButton(){
        return cy.get('#logout_sidebar_link');
    }

    static get burgerMenu(){
        return cy.get('#react-burger-menu-btn');
    }

    static get sidebar(){
        return cy.get('.bm-menu-wrap');
    }

    static get sauceLabBackpackAddCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    static get sauceLabTShirtAddCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    static get sauceLabOnesieAddCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }
    static get shoppingCartBadge() {
        return cy.get(".shopping_cart_badge");
    }

    static get removeButton() {
        return cy.get(".btn_secondary");
    }

    static get sauceLabBackpack() {
        return cy.get('.inventory_item_name').contains('Sauce Labs Backpack');
    }

}

export default ProductPage;