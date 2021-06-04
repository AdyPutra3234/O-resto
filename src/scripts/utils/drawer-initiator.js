import UrlParser from '../routes/url-parser';

const DrawerInitiator = {
  init({
    button,
    buttonIcon,
    drawer,
    content,
    navLinks,
  }) {
    const iconAnimation = () => {
      if (drawer.classList.contains('open')) {
        buttonIcon.style.transform = 'rotate(180deg)';
      } else {
        buttonIcon.style.transform = 'none';
      }
    };

    const renderIcon = () => {
      if (this._isDrawerOpen(drawer)) {
        buttonIcon.innerHTML = 'close';
        return;
      }

      buttonIcon.innerHTML = 'menu';
    };

    button.addEventListener('click', (event) => {
      this._toggleDrawer({
        event,
        drawer,
        iconAnimation,
        renderIcon,
      });
    });

    content.addEventListener('click', () => {
      this._closeDrawer({ drawer, iconAnimation, renderIcon });
    });

    navLinks.forEach((link) => {
      const linkName = link.innerHTML;
      let { resource: pageResource } = UrlParser.parseActiveUrlWithoutCombiner();
      if (pageResource === null) pageResource = 'home';

      if (linkName.toLowerCase() === pageResource) {
        link.classList.add('active-nav');
      } else {
        link.classList.remove('active-nav');
      }

      link.addEventListener('click', () => {
        this._removeClassActiveNav(navLinks);
        link.classList.toggle('active-nav');
        this._closeDrawer({ drawer, iconAnimation, renderIcon });
      });
    });
  },

  _toggleDrawer({
    event, drawer, iconAnimation, renderIcon,
  }) {
    drawer.classList.toggle('open');
    renderIcon();
    iconAnimation();
    event.preventDefault();
  },

  _closeDrawer({ drawer, iconAnimation, renderIcon }) {
    drawer.classList.remove('open');
    renderIcon();
    iconAnimation();
  },

  _isDrawerOpen(drawer) {
    return !!drawer.classList.contains('open');
  },

  _removeClassActiveNav(navLinks) {
    navLinks.forEach((link) => {
      link.classList.remove('active-nav');
    });
  },
};

export default DrawerInitiator;
