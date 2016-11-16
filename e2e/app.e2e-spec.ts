import { Ng2ObjectivesPage } from './app.po';

describe('ng2-objectives App', function() {
  let page: Ng2ObjectivesPage;

  beforeEach(() => {
    page = new Ng2ObjectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spr works!');
  });
});
