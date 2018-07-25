<template>
  <div>
    <h2>Add New Category</h2>
    <el-form label-position="left" label-width="100px">
      <el-form-item label="Name">
        <el-input v-model="category.name"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm">Create</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dbCategoriesRef } from '../firebaseConfig';

const setDefaultCategory = () => {
  return {
    amount: ''
  };
};

export default {
  data() {
    return {
      category: setDefaultCategory()
    };
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    submitForm() {
      const { category: { name }, currentUser: { uid: userId } } = this;
      const category = {
        name,
        userId
      };
      const that = this;
      dbCategoriesRef
        .push()
        .set(category)
        .then(() => {
          that.category = setDefaultCategory();
        });
    }
  }
};
</script>
