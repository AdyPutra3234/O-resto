import sanitizeHtml from 'sanitize-html';
import lazyLoad from '../../utils/lazy-load';
import '../../../styles/component/card-review.css';

class CardReview extends HTMLElement {
  connectedCallback() {
    this.render();
    lazyLoad();
  }

  set customerReviews(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
                    <div class="card__review">
                        <img data-src="images/avatar.png" alt="Avatar" class="lozad">
                        <div class="content__review">
                            <h3>${sanitizeHtml(this._review.name)}</h3>
                            <p class="review">${sanitizeHtml(this._review.review)}</p>
                            <p class="date__review">${this._review.date}</p>
                        </div>
                    </div>`;
  }
}

customElements.define('card-review', CardReview);
