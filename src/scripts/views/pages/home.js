import { showRestaurantItem, showUiFailedResponse } from '../../utils/rendering-component';
import RestaurantsDataSource from '../../data/restaurants-dataSource';
import '../components/sekeleton-loader';
import '../components/restaurant-item';

const Home = {
  async render() {
    return `
            <a href="#main-content" tabindex="1" class="skip-to__content">Skip to content</a>
            <hero-comp></hero-comp>
            <section id="main-content">
              <div class="explore">
                <h1 class="explore__label">Explore Restaurant</h1>
                <div class="resto__cards">
                  <sekeleton-loader></sekeleton-loader>
                  <sekeleton-loader></sekeleton-loader>
                  <sekeleton-loader></sekeleton-loader>
                  <sekeleton-loader></sekeleton-loader>
                  <sekeleton-loader></sekeleton-loader>
                  <sekeleton-loader></sekeleton-loader>
                </div>
              </div>
            </section>`;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.resto__cards');
    const response = await RestaurantsDataSource.listOfRestaurants();

    if (response && !response.error) {
      const { restaurants } = response;
      restaurantsContainer.innerHTML = '';
      showRestaurantItem(restaurantsContainer, restaurants);
    } else {
      restaurantsContainer.innerHTML = '';
      showUiFailedResponse(document.querySelector('.explore'));
    }
  },
};

export default Home;
