import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';

import users from './modules/users';
import expenses from './modules/expenses';
import categories from './modules/categories';

Vue.use(Vuex);

export const store = new Vuex.Store({
  mutations: firebaseMutations,
  modules: {
    users,
    expenses,
    categories
  }
});
