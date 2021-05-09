const DrawerInitiator = {
  init({
    button,
    buttonIcon,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._renderIcon(buttonIcon, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._renderIcon(buttonIcon, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('open');
    event.preventDefault();
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
    event.preventDefault();
  },

  _renderIcon(buttonIcon, drawer) {
    if (this._isDrawerOpen(drawer)) {
      buttonIcon.innerHTML = 'close';
      return;
    }

    buttonIcon.innerHTML = 'menu';
  },

  _isDrawerOpen(drawer) {
    return !!drawer.classList.contains('open');
  },
};

export default DrawerInitiator;
