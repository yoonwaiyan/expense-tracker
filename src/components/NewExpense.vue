<template>
  <div>
    <h2>Add New Expense</h2>
    <el-form ref="formLabelAlign" label-position="left" label-width="100px" :model="formLabelAlign">
      <el-form-item label="Description">
        <el-input v-model="formLabelAlign.description"></el-input>
      </el-form-item>
      <el-form-item label="Date">
        <el-input v-model="formLabelAlign.date"></el-input>
      </el-form-item>
      <el-form-item label="Amount">
        <el-input v-model="formLabelAlign.amount"></el-input>
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
      formLabelAlign: {
        description: '',
        data: '',
        amount: ''
      }
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

