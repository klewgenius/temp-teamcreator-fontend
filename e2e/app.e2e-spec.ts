import { TeamCreatorPage } from './app.po';

describe('team-creator App', function() {
  let page: TeamCreatorPage;

  beforeEach(() => {
    page = new TeamCreatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
