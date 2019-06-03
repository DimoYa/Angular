import { RegistrationPage } from './registration-page.po';

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

  // it('should send toast msg for successful registration', () => {
  //   regPage.navigateToFormPage();

  //   regPage.fillCredentials();

  //   expect(regPage.returnsIfAddButtonIsEnabled()).toBe(true);
  // });

//   it('should send an alert message for each field having invalid format in the form', () => {
//     formPage.navigateToFormPage();

//     formPage.fillCredentials(invalidCredentias);

//     expect(formPage.getProductErrorMessage()).toEqual('This field is required!');
//     expect(formPage.getEmailErrorMessage()).toEqual('Please enter a valid email!');
//     expect(formPage.getPriceErrorMessage()).toEqual('This field is required!');
//     expect(formPage.getExpiryDateErrorMessage()).toEqual('Please enter a valid date!');
//   });
});