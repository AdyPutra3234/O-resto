import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import itActsAsFavoriteRestaurantModel from './contract/favoriteRestaurantContract';

describe('FAVORITE RESTAURANT IDB CONTRACT TEST IMPLEMENTATION', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
