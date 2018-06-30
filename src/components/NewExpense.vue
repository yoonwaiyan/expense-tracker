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
    <el-button type="primary" @click="submitForm('formLabelAlign')">Create</el-button>
    <el-button @click="resetForm('formLabelAlign')">Reset</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      description: '',
      category: '',
      amount: ''
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
