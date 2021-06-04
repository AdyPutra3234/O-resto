import CONFIG from './config';

const API_ENDPOINT = {
  listOfRestaurants: `${CONFIG.BASE_URL}/list`,
  detailRestaurant: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  addReview: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
