<template>
  <div>
    <SingleArticleBox size="full" v-for="n in 10 " :key="n" class="mt-4"/>
  </div>
</template>

<script>
import SingleArticleBox from "@/components/main/article/single/singleArticleBox";
export default {
  components: {SingleArticleBox}
}
</script>

<style scoped>

</style>
