import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getButtonIncrease() {
    return element(by.cssContainingText('button', '+'));
  }
  getButtonDecrease() {
    return element(by.cssContainingText('button', '--'));
  }
  getPoints(){
    return element(by.cssContainingText('div','Points:')).$('span').getText()
  }
}
