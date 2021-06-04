import CONFIG from '../../globals/config';
import '../../../styles/component/restaurant-item.css';

class RestaurantItem extends HTMLElement {
  set dataRestaurant(data) {
    this._data = data;
    this._sourceImage = `${CONFIG.BASE_IMAGE_URL}/medium/${data.pictureId}`;
    this.render();
  }

  render() {
    this.innerHTML = `<article class="resto-card__item">
                            <p class="resto__city">Kota ${this._data.city}</p>
                            <img data-src="${this._sourceImage}" alt="Restaurant image" class="resto__tumbnail lozad">
                            <div class="resto__content">
                                <div class="resto__rating">
                                    <p>${this._data.rating}</p>
                                    <i class="material-icons" aria-label="rating" style="color: orange;">grade</i>
                                </div>
                                <h1 class="resto__name"><a href="#/detail/${this._data.id}">${this._data.name}</a></h1>
                                <p class="resto__description">${this._data.description}</p>
                            </div>
                        </article>`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
