import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to reactiveFun!');
  });
  it('Should start with 1 point', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('0');
  });
  it('Should increase points by clicking plus1', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('0');
    page.getButtonIncrease().click();
    expect(page.getPoints()).toEqual('1');

    page.getButtonIncrease().click();
    page.getButtonIncrease().click();
    page.getButtonIncrease().click();
    page.getButtonIncrease().click();
    page.getButtonIncrease().click();
    page.getButtonIncrease().click();

    expect(page.getPoints()).toEqual('7');


    
   });
});
