import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';
import sweetAlert from '../utils/swal-helper';

class RestaurantsDataSource {
  static async listOfRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.listOfRestaurants);
      const responseJson = await response.json();
      if (response.status !== 200 || responseJson.error) throw response.message;
      return responseJson;
    } catch (error) {
      return sweetAlert.errorMessage(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.detailRestaurant(id));
      const responseJson = await response.json();
      if (response.status !== 200 || responseJson.error) throw response.message;
      return responseJson;
    } catch (error) {
      return sweetAlert.errorMessage(error);
    }
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.addReview, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantsDataSource;
