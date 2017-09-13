import { CodeCollectionPage } from './app.po';

describe('code-collection App', () => {
  let page: CodeCollectionPage;

  beforeEach(() => {
    page = new CodeCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
