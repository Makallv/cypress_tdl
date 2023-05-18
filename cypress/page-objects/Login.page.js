class LoginPage{
    static get url(){
        return '/';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get username(){
        return cy.get('#user-name');
    }

    static get password(){
        return cy.get('#password');
    }

    static get loginButton(){
        return cy.get('#login-button');
    }

    static get errorMessage(){
        return cy.get('[data-test="error"]');
    }

    static loginToPage(username, password){
        this.username.type(username);
        this.password.type(password);
        this.loginButton.click();
    }
}

export default LoginPage;