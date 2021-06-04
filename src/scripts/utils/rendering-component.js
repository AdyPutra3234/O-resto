import { removeForm, formSubmitHandler } from './form-handler';
import '../views/components/restaurant-item';
import '../views/components/detail-item';
import '../views/components/card-product';
import '../views/components/card-review';
import '../views/components/form-addReview';
import '../views/components/like-button';
import '../views/components/unlike-button';
import '../views/components/ui-failedResponse';

const showRestaurantItem = (container, restaurants) => {
  restaurants.forEach((restaurant) => {
    const restaurantItemElement = document.createElement('restaurant-item');
    restaurantItemElement.dataRestaurant = restaurant;
    container.appendChild(restaurantItemElement);
  });
};

const showCardProduct = (products) => {
  const subDetailMenuContainer = document.querySelector('.sub-detail-container');
  subDetailMenuContainer.innerHTML = '';

  products.forEach((product) => {
    const cardProductElement = document.createElement('card-product');
    cardProductElement.product = product;
    subDetailMenuContainer.appendChild(cardProductElement);
  });
};

const showDetailItem = ({ container, restaurant, clickEvent }) => {
  const detailItemElement = document.createElement('detail-item');
  detailItemElement.detailRestaurant = restaurant;
  detailItemElement.clickEvent = clickEvent;
  container.appendChild(detailItemElement);
  showCardProduct(restaurant.menus.foods);
};

const showCardReview = (reviews) => {
  const subDetailMenuContainer = document.querySelector('.sub-detail-container');
  subDetailMenuContainer.innerHTML = '';

  reviews.slice().reverse().forEach((review) => {
    const cardReviewElement = document.createElement('card-review');
    cardReviewElement.customerReviews = review;
    subDetailMenuContainer.appendChild(cardReviewElement);
  });
};

const showFormAddReview = (id) => {
  const mainContent = document.querySelector('#main-content');
  const formAddReviewElement = document.createElement('form-addreview');
  formAddReviewElement.submit = formSubmitHandler;
  formAddReviewElement.cancle = removeForm;
  formAddReviewElement.restaurantId = id;
  mainContent.appendChild(formAddReviewElement);
};

const showLikeButton = (container, clickEvent) => {
  const likeButtonElement = document.createElement('like-button');
  likeButtonElement.like = clickEvent;
  container.innerHTML = '';
  container.appendChild(likeButtonElement);
};

const showUnlikeButton = (container, clickEvent) => {
  const likeButtonElement = document.createElement('unlike-button');
  likeButtonElement.unlike = clickEvent;
  container.innerHTML = '';
  container.appendChild(likeButtonElement);
};

const showUiFailedResponse = (container) => {
  const uiFiledResponseElement = document.createElement('ui-failed');
  container.appendChild(uiFiledResponseElement);
};

export {
  showRestaurantItem,
  showDetailItem,
  showCardProduct,
  showCardReview,
  showFormAddReview,
  showLikeButton,
  showUnlikeButton,
  showUiFailedResponse,
};
