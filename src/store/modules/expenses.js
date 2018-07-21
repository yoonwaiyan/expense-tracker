import { firebaseAction } from 'vuexfire';

const state = {
  expenses: []
};

const getters = {
  getExpenses: state => state.expenses
};

const mutations = {};

const actions = {
  setExpensesRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('expenses', ref);
  })
};

export default {
  state,
  mutations,
  getters,
  actions
};
