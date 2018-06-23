<template>
  <el-container class="main-container">
    <el-main>
      <ep-new-expense></ep-new-expense>
      <ep-expenses></ep-expenses>
    </el-main>
  </el-container>
</template>

<script>
  import NewExpense from './NewExpense.vue';
  import Expenses from './Expenses.vue';

  export default {
    components: {
      epNewExpense: NewExpense,
      epExpenses: Expenses
    }
  }
</script>

<style>
  body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    margin: 0;
  }

  .main-container {
    width: 80%;
    margin: 0 auto;
  }
</style>