import RestaurantsDataSource from '../data/restaurants-dataSource';
import sweetAlert from './swal-helper';

const removeForm = () => {
  document.querySelector('form-addreview').remove();
};

const formSubmitHandler = async (event) => {
  try {
    event.preventDefault();
    const formElement = document.querySelector('form-addreview');
    const textName = formElement.name;
    const textReview = formElement.review;
    const id = formElement.restaurantId;
    const isEmptyField = textName.length === 0 || textReview.length === 0;

    if (isEmptyField) {
      sweetAlert.warnigMessage('All field must be filled');
    } else {
      const response = await RestaurantsDataSource.addReview({
        id,
        name: textName,
        review: textReview,
      });

      if (!response || response.error) throw response.message;
      else {
        removeForm();
        sweetAlert.successMessage('Thank\'s for your review');
        window.location.reload();
      }
    }
  } catch (error) {
    sweetAlert.errorMessage(`Something's went wrong "${error}" please check youre connection`);
  }
};

export {
  formSubmitHandler,
  removeForm,
};
