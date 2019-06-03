import { browser, by, element, Key, protractor, ElementFinder, WebElement } from 'protractor';
import * as moment from 'moment';

export class RegistrationPage {

    private currentTime = moment().utc(true).format('YYYYMMDDmmss');
    private userNameText = 'E2e' + this.currentTime;
    private fullNameText = 'FirstName LastName';
    private emailText = 'e2e@test.com';
    private passWordText = 'test';
    private confirmPassWordText = 'test';


    private userName: ElementFinder = element(by.xpath('//*[@formcontrolname="username"]'));
    private fullName: ElementFinder = element(by.xpath('//*[@formcontrolname="fullname"]'));
    private email: ElementFinder = element(by.xpath('//*[@formcontrolname="email"]'));
    private passWord: ElementFinder = element(by.xpath('//*[@formcontrolname="password"]'));
    private confirmPassWord: ElementFinder = element(by.xpath('//*[@formcontrolname="confirmPassword"]'));
    private toastMsg = element(by.xpath('//*[@id="toast-container"]//div[contains(@role,"alertdialog")]'));
    public registrationButton: ElementFinder = element(by.id('registrationButton'));

    private validCredentias = {
        userName: this.userNameText,
        fullName: this.fullNameText,
        email: this.emailText,
        passWord: this.passWordText,
        confirmPassWord: this.confirmPassWordText
    };
    
    private waitUntilReady = function (elm: ElementFinder) {
        browser.wait(function () {
            return elm.isPresent();
        }, 10000);
    };

    geToastMessage() {
        this.waitUntilReady(this.toastMsg);
        return this.toastMsg.getText();
    }

    navigateToRegisterPage() {
        return browser.get('register');
    }

    fillCredentials(credentias: any = this.validCredentias) {

        this.userName.sendKeys(credentias.userName);
        this.fullName.sendKeys(credentias.fullName);
        this.email.sendKeys(credentias.email);
        this.passWord.sendKeys(credentias.passWord);
        this.confirmPassWord.sendKeys(credentias.confirmPassWord);
    }

    returnsIfRegistrationButtonIsEnabled() {
        this.waitUntilReady(this.registrationButton);
        return this.registrationButton.isEnabled();
    }

    clickSendButton(button: WebElement) {
        button.click();
    }
}
