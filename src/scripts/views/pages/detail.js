import {
  showDetailItem,
  showCardProduct,
  showCardReview,
  showFormAddReview,
  showUiFailedResponse,
} from '../../utils/rendering-component';

import RestaurantsDataSource from '../../data/restaurants-dataSource';
import LikeButtonInititator from '../../utils/like-button-initiator';
import UrlParser from '../../routes/url-parser';
import '../components/detail-item';

const Detail = {

  async render() {
    return `
            <section id="main-content">
              <loader-animation></loader-animation>
              <div id="likeButtonContainer"></div>
            </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantsDataSource.detailRestaurant(url.id);

    if (response && !response.error) {
      const { restaurant } = response;
      document.querySelector('loader-animation').remove();

      const detailMenuClickEventHandler = (event) => {
        const btnID = event.target.id;

        if (btnID !== 'add-review') {
          document.querySelectorAll('.detail-nav__menu button').forEach((button) => {
            button.classList.remove('active-button');
          });
          event.target.classList.add('active-button');
        }

        if (btnID === 'btn-foods') {
          showCardProduct(restaurant.menus.foods);
        } else if (btnID === 'btn-drinks') {
          showCardProduct(restaurant.menus.drinks);
        } else if (btnID === 'btn-reviews') {
          showCardReview(restaurant.customerReviews);
        } else if (btnID === 'add-review') {
          showFormAddReview(restaurant.id);
        }
      };

      showDetailItem({
        container: document.querySelector('#main-content'),
        restaurant,
        clickEvent: detailMenuClickEventHandler,
      });

      LikeButtonInititator.init({
        container: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } else {
      document.querySelector('loader-animation').remove();
      showUiFailedResponse(document.querySelector('#main-content'));
    }
  },

};

export default Detail;
