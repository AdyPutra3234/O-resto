Feature('Add Review');

Scenario('add review on restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForVisible('.resto__name a');
  I.seeElement('.resto__name a');
  I.click('.resto__name a');

  I.seeElement('#add-review');
  I.click('#add-review');
  I.seeElement('form-addreview');

  I.seeElement('input#name');
  I.fillField('input#name', 'test');

  I.seeElement('#text-review');
  I.fillField('#text-review', 'just for testing');

  I.seeElement('button#submit');
  I.click('button#submit');

  I.see('Success', '.swal2-title');
  I.seeElement('button.swal2-confirm');
  I.click('button.swal2-confirm');
});
