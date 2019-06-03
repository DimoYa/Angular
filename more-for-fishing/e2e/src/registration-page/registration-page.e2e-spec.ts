import { RegistrationPage } from './registration-page.po';
import { browser, logging } from 'protractor';

describe('Form page section', () => {
  let regPage: RegistrationPage;

  beforeEach(() => {
    regPage = new RegistrationPage();

  });

  it('should send toast msg for successful registration', () => {
    regPage.navigateToRegisterPage();

    regPage.fillCredentials();
    regPage.clickSendButton(regPage.registrationButton);

    expect(regPage.geToastMessage()).toEqual('Register successfully');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});