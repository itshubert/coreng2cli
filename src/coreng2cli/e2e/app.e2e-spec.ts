import { Coreng2cliPage } from './app.po';

describe('coreng2cli App', function() {
  let page: Coreng2cliPage;

  beforeEach(() => {
    page = new Coreng2cliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
