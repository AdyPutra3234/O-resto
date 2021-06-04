import routes from '../routes/routes';
import lazyLoad from '../utils/lazy-load';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button,
    buttonIcon,
    drawer,
    content,
    navLinks,
  }) {
    this._button = button;
    this._buttonIcon = buttonIcon;
    this._drawer = drawer;
    this._content = content;
    this._navLinks = navLinks;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      buttonIcon: this._buttonIcon,
      drawer: this._drawer,
      content: this._content,
      navLinks: this._navLinks,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    lazyLoad();
  }
}

export default App;
