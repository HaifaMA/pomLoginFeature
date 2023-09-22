class LoginErrorPage{

   loginErrorLocator = 'div*=number you entered'

    async isloginErrorDisplayed(){
       return await $(this.loginErrorLocator).isDisplayed();
    }
}

module.exports = LoginErrorPage;