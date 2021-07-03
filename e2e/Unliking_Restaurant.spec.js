Feature('Unliking Restaurant');

Scenario('Unliking on restaurant', async ({ I }) => {
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
  I.dontSeeElement('#idbEmptyUI');
  I.seeElement('.resto-card__item');
  I.see(firstRestaurantTitle, firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#unlikeButton');
  I.click('#unlikeButton');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('.resto-card__item');
  I.see('!!! Your favorites is empty', '#idbEmptyUI');
});
