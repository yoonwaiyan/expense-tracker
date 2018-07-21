import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Categories from './components/Categories';

export default [
  {
    path: '/',
    name: 'homeLink',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/categories',
    name: 'categoriesLink',
    component: Categories,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/login', name: 'loginLink', component: Login },
  { path: '*', redirect: '/' }
];
