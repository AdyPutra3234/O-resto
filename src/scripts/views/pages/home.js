import { showRestaurantItem, showUiFailedResponse } from '../../utils/rendering-component';
import RestaurantsDataSource from '../../data/restaurants-dataSource';
import '../components/restaurant-item';

const Home = {
  async render() {
    return `
            <a href="#main-content" tabindex="1" class="skip-to__content">Skip to content</a>
            <hero-comp></hero-comp>
            <section id="main-content">
              <div class="explore">
                <h1 class="explore__label">Explore Restaurant</h1>
                <loader-animation></loader-animation>
                <div class="resto__cards"></div>
              </div>
            </section>`;
  },

  async afterRender() {
    const response = await RestaurantsDataSource.listOfRestaurants();

    if (response && !response.error) {
      const { restaurants } = response;
      document.querySelector('loader-animation').remove();
      const restaurantsContainer = document.querySelector('.resto__cards');
      showRestaurantItem(restaurantsContainer, restaurants);
    } else {
      document.querySelector('loader-animation').remove();
      showUiFailedResponse(document.querySelector('.explore'));
    }
  },
};

export default Home;
