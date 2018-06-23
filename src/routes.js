import Login from './Login';
import Dashboard from './Dashboard';

export default [
  {
    path: '/',
    name: 'homeLink',
    component: Dashboard
  },
  { path: '/login', name: 'loginLink', component: Login },
  { path: '*', redirect: '/' }
];
