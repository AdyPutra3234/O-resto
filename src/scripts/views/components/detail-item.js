import CONFIG from '../../globals/config';
import '../../../styles/component/detail-item.css';

class DetailItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set detailRestaurant(data) {
    this._data = data;
    this._sourceImage = `${CONFIG.BASE_IMAGE_URL}/medium/${data.pictureId}`;
    this.render();
  }

  set clickEvent(action) {
    this._clickEvent = action;
    this.render();
  }

  render() {
    this.innerHTML = `  
      <article class="detail-content">
        <div class="img-detail__wrapper">
          <img data-src="${this._sourceImage}" alt="" class="lozad">
        </div>
        <section class="detail-section1">
          <div class="heading">
            <h2>${this._data.name}</h2>
          </div>
          <div class="rating">
            <p>${this._data.rating}</p>
            <i class="material-icons" aria-label="rating" style="color:#FDCC0D;">grade</i>
          </div>
          <h3 class="city">Kota ${this._data.city}</h3>
          <div class="address">
            <i class="material-icons" aria-label="location" style="color:#1EA362;">location_on</i>
            <p>${this._data.address}</p>
          </div>
          <div class="categories">
            <h3>Categories</h3>
            ${this._data.categories.map((category) => `<p>${category.name}</p>`).join(' ')}
          </div>
          <div class="description">
            <h3>Description</h3>
            <p>${this._data.description}</p>
          </div>
          <button id="add-review" tabindex="6">add review</button>
        </section>
        <section class="detail-section2">
          <div class="detail-nav__menu">
            <button id="btn-foods"class="active-button">Foods</button>
            <button id="btn-drinks">Drinks</button>
            <button id="btn-reviews">Reviews</button>
          </div>
          <div class="sub-detail-container"></div>
        </section>
      </article>`;

    this.querySelector('#btn-foods').addEventListener('click', this._clickEvent);
    this.querySelector('#btn-drinks').addEventListener('click', this._clickEvent);
    this.querySelector('#btn-reviews').addEventListener('click', this._clickEvent);
    this.querySelector('#add-review').addEventListener('click', this._clickEvent);
  }
}

if (!customElements.get('detail-item')) customElements.define('detail-item', DetailItem);
