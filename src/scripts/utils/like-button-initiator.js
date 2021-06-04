import FavoriteRestaurantIdb from '../data/favorite-idb';
import { showLikeButton, showUnlikeButton } from './rendering-component';

const LikeButtonInititator = {
  async init({ container, restaurant }) {
    this._container = container;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeRestaurant = async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    };

    showLikeButton(this._container, likeRestaurant);
  },

  _renderLiked() {
    const unLikeRestaurant = async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    };

    showUnlikeButton(this._container, unLikeRestaurant);
  },
};

export default LikeButtonInititator;
