const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking on restaurant', async ({ I }) => {
  I.amOnPage('/#/favorites');
  I.see('!!! Your favorites is empty', '#idbEmptyUI');

  I.amOnPage('/');

  I.waitForResponse((response) => response.url() === 'https://restaurant-api.dicoding.dev/list' && response.status() === 200, 5);

  I.seeElement('restaurant-item');
  I.seeElement('.resto__name a');

  const firstRestaurant = locate('.resto__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.resto-card__item');
  const likedRestaurantTitle = await I.grabTextFrom('.resto__name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
