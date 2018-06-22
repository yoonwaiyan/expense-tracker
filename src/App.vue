<template>
  <el-container class="main-container">
    <el-main>
      <h2>Expenses</h2>
      <el-table
        :data="tableData"
        stripe>
        <el-table-column
          prop="date"
          label="Date">
        </el-table-column>
        <el-table-column
          prop="description"
          label="Description">
        </el-table-column>
        <el-table-column
          prop="category"
          label="Category">
        </el-table-column>
      </el-table>


      <h2>Add New Expense</h2>
      <el-form ref="formLabelAlign" label-position="left" label-width="100px" :model="formLabelAlign">
        <el-form-item label="Name">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm('formLabelAlign')">Create</el-button>
      <el-button @click="resetForm('formLabelAlign')">Reset</el-button>
    </el-main>
</el-container>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        tableData: [{
          date: '2016-05-03',
          description: 'Nasi Lemak',
          category: 'Food'
        }, {
          date: '2016-05-02',
          description: 'Tom Yam Soup',
          category: 'Food'
        }, {
          date: '2016-05-04',
          description: 'Mixed Rice',
          category: 'Food'
        }, {
          date: '2016-05-01',
          description: 'KFC',
          category: 'Food'
        }]
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
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