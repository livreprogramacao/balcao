import { TestBootstrapAppPage } from './app.po';

describe('test-bootstrap-app App', function() {
  let page: TestBootstrapAppPage;

  beforeEach(() => {
    page = new TestBootstrapAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test works!');
  });
});
