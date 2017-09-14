import { ScenarioTrackerPage } from './app.po';

describe('scenario-tracker App', () => {
  let page: ScenarioTrackerPage;

  beforeEach(() => {
    page = new ScenarioTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
