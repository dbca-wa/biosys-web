import { browser, by, element } from 'protractor';

export class BiosysClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('biosys-root h2')).getText();
  }
}
