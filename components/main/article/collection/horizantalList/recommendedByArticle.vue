<template>
  <div>
      <v-row>
        <v-col cols="12" lg="4" v-for="n in 3">
          <SingleArticleBox :key="n"/>
        </v-col>
      </v-row>
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
