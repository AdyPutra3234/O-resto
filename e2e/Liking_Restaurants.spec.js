const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking on restaurant then unlike it', async ({ I }) => {
  I.amOnPage('/#/favorites');
  I.see('!!! Your favorites is empty', '#idbEmptyUI');

  I.amOnPage('/');

  I.waitForVisible('.resto__name a');
  I.seeElement('.resto__name a');
  //   pause();

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
