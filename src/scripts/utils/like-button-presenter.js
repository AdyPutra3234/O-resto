import { showLikeButton, showUnlikeButton } from './rendering-component';

const LikeButtonPresenter = {
  async init({ container, restaurant, favoriteRestaurant }) {
    this._container = container;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

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
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeRestaurant = async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    };

    showLikeButton(this._container, likeRestaurant);
  },

  _renderLiked() {
    const unLikeRestaurant = async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    };

    showUnlikeButton(this._container, unLikeRestaurant);
  },
};

export default LikeButtonPresenter;
