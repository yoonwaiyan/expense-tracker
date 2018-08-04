import Vue from 'vue';
import VueRouter from 'vue-router';
import Accounting from 'accounting-js';
import DateFNS from 'date-fns';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { firebaseApp as Firebase } from './firebaseConfig';

import { store } from './store/store';
import routes from './routes';
import App from './App.vue';

let app;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

Vue.filter('currency', function(val) {
  return Accounting.formatMoney(val);
});

Vue.filter('date', function(val) {
  if (!val) return 'N/A';
  return DateFNS.format(val, 'MM/DD/YYYY');
});

Firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('setUser', user);
  } else {
    store.dispatch('setUser', null);
  }

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
