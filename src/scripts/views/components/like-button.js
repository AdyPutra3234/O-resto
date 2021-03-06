import '../../../styles/component/like-unlike-button.css';

class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set like(action) {
    this._like = action;
    this.render();
  }

  render() {
    this.innerHTML = `
                    <button aria-label="add to favorites" id="likeButton" class="favorite__widget">
                        <i class="material-icons" aria-hidden="true">favorite_border</i>
                    </button>`;

    this.querySelector('#likeButton').addEventListener('click', this._like);
  }
}

if (!customElements.get('like-button')) customElements.define('like-button', LikeButton);
