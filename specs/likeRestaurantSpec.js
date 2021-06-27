import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('LIKING A RESTAURANT', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => addLikeButtonContainer());

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('like-button')).toBeTruthy();
  });

  it('Should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('unlike-button')).toBeFalsy();
  });

  it('Should able to like restaurant', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    const favoriteRestaurans = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(favoriteRestaurans).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should not add restaurant to favorite when its already liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.getElementById('likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should not add restaurant to favorite when its has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});

    document.getElementById('likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
