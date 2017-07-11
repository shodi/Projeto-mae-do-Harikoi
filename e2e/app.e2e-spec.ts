import { ProjetoMaeDoHarikoiPage } from './app.po';

describe('projeto-mae-do-harikoi App', () => {
  let page: ProjetoMaeDoHarikoiPage;

  beforeEach(() => {
    page = new ProjetoMaeDoHarikoiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
