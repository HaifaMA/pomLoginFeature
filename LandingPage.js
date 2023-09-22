class LandingPage{
    
    messengerLinkLocator = '=Messenger';
    loginEmailLocator = '#email';
    loginPwdLocator = '#pass';
    loginButtonLocator = '<button>';
    


    //locator for webelement on landingpage//



    //Function for webelement on Landingpage//
    async clickMessenger(){
    await $(this.messengerLinkLocator).click();
    }

    async isLoginEmailFieldEnabled(){
       return await $(this.loginEmailLocator).isEnabled();
    }

    async isPwdFieldEnabled(){
        return await $(this.loginPwdLocator).isEnabled();
    }

    async isLoginBtnEnabled(){
       return  await $(this.loginButtonLocator).isEnabled();
    }

    async enterLoginEmail(email){
        await $(this.loginEmailLocator).setValue(email);
    }

    async enterLoginPassword(pwd){
        await $(this.loginPwdLocator).setValue(pwd)
    }

    async clickLoginButton(){
        await $(this.loginButtonLocator).click();
    }

}

module.exports = LandingPage;