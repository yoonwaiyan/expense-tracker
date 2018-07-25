import { firebaseAction } from 'vuexfire';

const state = {
  expenses: []
};

const getters = {
  getCategories: state => state.categories
};

const mutations = {};

const actions = {
  setCategoriesRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('categories', ref);
  })
};

export default {
  state,
  mutations,
  getters,
  actions
};
