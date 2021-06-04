import { showRestaurantItem } from '../../utils/rendering-component';
import FavoriteRestaurantIdb from '../../data/favorite-idb';

const Favorites = {
  async render() {
    return `<section id="main-content">
              <div class="explore">
                <h1 class="explore__label favorites">Favorites</h1>
                <p id="idbEmptyUI"style="text-align:center; font-weight:bold;">!!! Your favorites is empty</p>
                <loader-animation></loader-animation>
                <div class="resto__cards">
                </div>
              </div>
            </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.resto__cards');

    if (restaurants) {
      document.querySelector('loader-animation').remove();
    }

    if (restaurants.length >= 1) {
      document.querySelector('#idbEmptyUI').remove();
      showRestaurantItem(restaurantsContainer, restaurants);
    }
  },
};

export default Favorites;
