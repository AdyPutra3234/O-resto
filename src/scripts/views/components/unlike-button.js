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
                      <button aria-label="remove from favorites" id="likeButton" class="like">
                          <i class="material-icons" aria-hidden="true">favorite</i>
                      </button>`;

    this.querySelector('.like').addEventListener('click', this._unlike);
  }
}

customElements.define('unlike-button', UnlikeButton);
