import { DockerizedAngularAppPage } from './app.po';

describe('dockerized-angular-app App', () => {
  let page: DockerizedAngularAppPage;

  beforeEach(() => {
    page = new DockerizedAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
