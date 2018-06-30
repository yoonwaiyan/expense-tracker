import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Firebase from 'firebase';
import config from './config';

import { store } from './store/store';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  created() {
    Firebase.initializeApp(config.firebase);
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('setUser', user);
      } else {
        store.dispatch('setUser', null);
      }
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
  },
  render: h => h(App)
}).$mount('#app');
