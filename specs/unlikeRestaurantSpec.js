import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('UNLIKING A RESTAURANT', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should display unlike button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('unlike-button')).toBeTruthy();
  });

  it('Should not display like button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('like-button')).toBeFalsy();
  });

  it('Should be able to remove liked restaurant from favorites', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('unlikeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('Should not throw error if the unliked restaurant not in favorites', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.getElementById('unlikeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
