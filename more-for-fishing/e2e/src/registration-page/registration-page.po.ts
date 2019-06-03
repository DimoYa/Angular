import { browser, by, element, Key, protractor, ElementFinder } from 'protractor';
import { Guid } from "guid-typescript";

export class RegistrationPage {

    guid: Guid;
    
    constructor() {
        this.guid = Guid.create();
    }

    private userNameText = 'E2e' + this.guid.toString();
    private fullNameText = 'FirstName LastName';
    private emailText = 'e2e' + this.guid.toString() +'@test.com';
    private passWordText = 'test';
    private confirmPassWordText = 'test';


    private userName: ElementFinder = element(by.xpath('//*[@formcontrolname="product"]'));
    private fullName: ElementFinder = element(by.xpath('//*[@formcontrolname="product"]'));
    private email: ElementFinder = element(by.xpath('//*[@formcontrolname="product"]'));
    private passWord: ElementFinder = element(by.xpath('//*[@formcontrolname="product"]'));
    private confirmPassWord: ElementFinder = element(by.xpath('//*[@formcontrolname="product"]'));
    private registrationButton: ElementFinder = element(by.className('button'));

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
}
