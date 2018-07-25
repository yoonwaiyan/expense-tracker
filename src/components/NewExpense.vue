<template>
  <div>
    <h2>Add New Expense</h2>
    <el-form label-position="left" label-width="100px">
      <el-form-item label="Date">
        <el-date-picker v-model="expense.date" type="date" placeholder="Pick a day" class="datepicker"></el-date-picker>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="expense.description"></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-select v-model="expense.category" placeholder="Select" class="el-select-custom">
          <el-option v-for="category in getCategories" :key="category.uid" :label="category.name" :value="category.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Amount">
        <el-input v-model="expense.amount"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm">Create</el-button>
    <el-button @click="resetForm">Reset</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dbExpensesRef } from '../firebaseConfig';

const setDefaultExpense = () => {
  return {
    date: new Date(),
    description: '',
    category: '',
    amount: ''
  };
};

export default {
  data() {
    return {
      expense: setDefaultExpense()
    };
  },
  computed: {
    ...mapGetters(['currentUser', 'getCategories'])
  },
  methods: {
    submitForm() {
      const {
        expense: { date, description, category, amount },
        currentUser: { uid: userId }
      } = this;
      const expense = {
        date: date.getTime(),
        description,
        category,
        amount,
        userId
      };
      const that = this;
      dbExpensesRef
        .push()
        .set(expense)
        .then(() => {
          that.expense = setDefaultExpense();
        });
    },
    resetForm() {
      this.expense = setDefaultExpense();
    }
  }
};
</script>

<style>
.datepicker.el-date-editor.el-input,
.datapicker.el-date-editor.el-input__inner {
  width: 100%;
}

.el-select-custom {
  width: 100%;
}
</style>
