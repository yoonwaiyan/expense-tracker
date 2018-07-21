<template>
  <div>
    <h2>Add New Expense</h2>
    <el-form label-position="left" label-width="100px">
      <el-form-item label="Date">
        <el-date-picker v-model="date" type="date" placeholder="Pick a day" class="datepicker"></el-date-picker>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="description"></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-input v-model="category"></el-input>
      </el-form-item>
      <el-form-item label="Amount">
        <el-input v-model="amount"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm">Create</el-button>
    <el-button @click="resetForm('formLabelAlign')">Reset</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dbExpensesRef } from '../firebaseConfig';

export default {
  data() {
    return {
      date: new Date(),
      description: '',
      category: '',
      amount: ''
    };
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    submitForm() {
      const {
        date,
        description,
        category,
        amount,
        currentUser: { uid: userId }
      } = this;
      const expense = {
        date: date.getTime(),
        description,
        category,
        amount,
        userId
      };
      console.log('saving expense: ', expense);
      dbExpensesRef.push(expense);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.datepicker.el-date-editor.el-input,
.datapicker.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
