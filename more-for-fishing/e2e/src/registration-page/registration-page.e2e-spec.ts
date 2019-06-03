import { RegistrationPage } from './registration-page.po';
import { browser, logging } from 'protractor';

describe('Form page section', () => {
  let regPage: RegistrationPage;

  const invalidCredentias = {
    product: '',
    email: 'invalid',
    price: 'invalid',
    expiryDate: ''
  };

  beforeEach(() => {
    regPage = new RegistrationPage();

  });

  it('should send toast msg for successful registration', () => {
    regPage.navigateToRegisterPage();

    regPage.fillCredentials();

    expect(regPage.returnsIfRegistrationButtonIsEnabled()).toBe(true);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});