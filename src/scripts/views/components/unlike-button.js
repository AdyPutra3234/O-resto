import '../../../styles/component/like-unlike-button.css';

class UnlikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set unlike(action) {
    this._unlike = action;
    this.render();
  }

  render() {
    this.innerHTML = `
                      <button aria-label="remove from favorites" id="unlikeButton" class="favorite__widget">
                          <i class="material-icons" aria-hidden="true">favorite</i>
                      </button>`;

    this.querySelector('#unlikeButton').addEventListener('click', this._unlike);
  }
}

if (!customElements.get('unlike-button')) customElements.define('unlike-button', UnlikeButton);
