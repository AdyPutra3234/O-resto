import '../../../styles/component/app-bar.css';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  <div class="header">
                            <div class="header__inner">
                                <a id="hamburger" href="#" aria-label="Navigation Menu" tabindex="2">
                                    <i class="material-icons"  aria-hidden="true">menu</i>
                                </a>
                                <h1 class="header__title">
                                    O'resto
                                </h1>
                            </div>
                            <nav id="drawer" class="nav">
                                <ul class="nav__list">
                                    <li class="nav__item"><a href="#/home" tabindex="3" class="active-nav">Home</a></li>
                                    <li class="nav__item"><a href="#/favorites" tabindex="4">Favorites</a></li>
                                    <li class="nav__item"><a href="https://github.com/AdyPutra3234" tabindex="5">About Us</a></li>
                                </ul>
                            </nav>
                        </div>`;
  }
}

if (!customElements.get('app-bar')) customElements.define('app-bar', AppBar);
