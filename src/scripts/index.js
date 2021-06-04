import 'regenerator-runtime';

import swRegister from './utils/sw-register';
import App from './views/app';

import './views/components/app-bar';
import './views/components/hero-component';
import './views/components/loader';

import '../styles/main.css';
import '../styles/responsive.css';

const app = new App({
  button: document.querySelector('#hamburger'),
  buttonIcon: document.querySelector('#hamburger i'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('.content'),
  navLinks: document.querySelectorAll('li.nav__item a'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
