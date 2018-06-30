import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default [
  {
    path: '/',
    name: 'homeLink',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/login', name: 'loginLink', component: Login },
  { path: '*', redirect: '/' }
];
