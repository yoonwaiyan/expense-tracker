<template>
  <div>
    <ep-new-expense></ep-new-expense>
    <ep-expenses></ep-expenses>
  </div>
</template>

<script>
import NewExpense from './NewExpense.vue';
import Expenses from './Expenses.vue';

export default {
  components: {
    epNewExpense: NewExpense,
    epExpenses: Expenses
  }
};
</script>