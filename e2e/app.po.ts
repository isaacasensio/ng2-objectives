import { browser, element, by } from 'protractor';

export class Ng2ObjectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spr-root h1')).getText();
  }
}
