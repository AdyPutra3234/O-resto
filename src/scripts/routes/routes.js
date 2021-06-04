import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
