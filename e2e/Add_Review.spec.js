Feature('Add Review On Restaurant');

const sendForm = (name, review, I) => {
  I.seeElement('form-addreview');

  I.seeElement('input#name');
  I.fillField('input#name', name);

  I.seeElement('#text-review');
  I.fillField('#text-review', review);

  I.seeElement('button#submit');
  I.click('button#submit');
};

const closeWarningPopUp = (I) => {
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
};

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForResponse((response) => response.url() === 'https://restaurant-api.dicoding.dev/list' && response.status() === 200, 5);

  I.seeElement('restaurant-item');
  I.seeElement('.resto__name a');
  I.click('.resto__name a');

  I.seeElement('button#add-review');
  I.click('button#add-review');
});

Scenario('Show warning when all field not filled', async ({ I }) => {
  // When the name input field is empty
  sendForm('', 'Just for testing', I);
  I.see('Oops...', '.swal2-title');

  closeWarningPopUp(I);

  // When the review text field is empty
  sendForm('Jhon Doe', '', I);
  I.see('Oops...', '.swal2-title');

  closeWarningPopUp(I);

  // When all field is empty
  sendForm('', '', I);
  I.see('Oops...', '.swal2-title');
});

Scenario('Close form when cancel button clicked', ({ I }) => {
  I.seeElement('button#cancel');
  I.click('button#cancel');

  I.dontSeeElementInDOM('form-addreview');
});

Scenario('Show success add review on restaurant', async ({ I }) => {
  sendForm('Jhon Doe', 'Just for testing', I);
  I.see('Success', '.swal2-title');
});
