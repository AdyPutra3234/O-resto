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
                    <button aria-label="add to favorites" id="likeButton" class="like">
                        <i class="material-icons" aria-hidden="true">favorite_border</i>
                    </button>`;

    this.querySelector('.like').addEventListener('click', this._like);
  }
}

customElements.define('like-button', LikeButton);
