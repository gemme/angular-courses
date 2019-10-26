import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    console.log('title', page.getTitleText());
    expect(page.getTitleText()).toEqual('Login');
  });

  /* fit('got to dashboard', () => {
    browser.get('auth/login').then(() => {
        let email = element(by.name('email'));
        let password = element(by.name('password'));
        let button = element(by.id('send'));
        email.sendKeys('user@email.com');
        password.sendKeys('hola');
        button.click();
        waitsFor(() => {
            return true;
        });
        expect(page.getTitleText()).toEqual('Dashboard');
    });
  }); */

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
