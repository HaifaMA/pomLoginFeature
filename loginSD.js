const { Then, When } = require("@wdio/cucumber-framework");
const LandingPage = require('../../Pages/Facebook/LandingPage');
const LoginErrorPage = require("../../Pages/Facebook/LoginErrorPage");
const { expect } = require("chai");
const landingpage = new LandingPage();


Then(/^I verify login email field is enabled$/, async function(){
   // const landingpage = new LandingPage();//
    expect(await landingpage.isLoginEmailFieldEnabled(), ' Email login field is NOT enabled ').to.be.true;
});


Then(/^I verify login password field is enabled$/, async function() {
   // const landingpage = new LandingPage();
    expect(await landingpage.isPwdFieldEnabled(), ' Password login field is NOT enabled ').to.be.true;
});

Then(/^I verify login button is enabled$/, async function(){
   // const landingpage = new LandingPage();
    expect(await landingpage.isLoginBtnEnabled(), ' Login button is NOT enabled ').to.be.true;
});

When(/^I enter "(.+)" in login email$/, async function(email) {
   // const landingpage = new LandingPage();
    await landingpage.enterLoginEmail(email);
});

When(/^I enter "(.+)" in login password$/, async function(pwd){
   // const landingpage = new LandingPage();
    await landingpage.enterLoginPassword(pwd)
    //await browser.pause(10000);
    await landingpage.clickLoginButton();
    await browser.pause(10000);
});

When(/^I click on login button$/, async function(){
    //const landingpage = new LandingPage();
    await browser.pause(2000);
   // await landingpage.clickLoginButton();
    await browser.pause(2000);

});

Then(/^I verify error messege is displayed$/, async function(){
    const loginerrorpage = new LoginErrorPage();
    const verifyLoginErrorDisplayed = await loginerrorpage.isloginErrorDisplayed();
     expect(verifyLoginErrorDisplayed, 'Error messege is not displayed').to.be.true;
})





