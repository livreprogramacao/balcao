import { browser, element, by } from 'protractor';

export class TestBootstrapAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-root h1')).getText();
  }
}
