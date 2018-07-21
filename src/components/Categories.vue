<template>
  <div>
    <ep-new-category></ep-new-category>
    <ep-categories></ep-categories>
  </div>
</template>

<script>
import NewCategory from './NewCategory.vue';
import CategoriesTable from './CategoriesTable.vue';

export default {
  components: {
    epNewCategory: NewCategory,
    epCategories: CategoriesTable
  }
};
</script>