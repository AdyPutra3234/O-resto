import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    container: document.getElementById('likeButtonContainer'),
    restaurant,
    favoriteRestaurant: FavoriteRestaurantIdb,
  });
};

export default createLikeButtonPresenterWithRestaurant;
