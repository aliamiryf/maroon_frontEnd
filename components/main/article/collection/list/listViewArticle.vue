<template>
  <div>
    <SingleArticleListView v-for="n in 10 " :key="n"/>
  </div>
</template>

<script>
import SingleArticleListView from "@/components/main/article/single/singleArticleListView";
export default {
  components: {SingleArticleListView}
}
</script>

<style scoped>

</style>
