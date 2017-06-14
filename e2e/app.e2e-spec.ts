import { ComicSpaPage } from './app.po';

describe('comic-spa App', () => {
  let page: ComicSpaPage;

  beforeEach(() => {
    page = new ComicSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
