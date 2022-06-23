<template>
  <div class="mt-10">
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" lg="4" v-for="n in 9">
          <SingleCategory/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleCategory from "@/components/main/category/singleCategory";
export default {
  components: {SingleCategory}
}
</script>

<style scoped>

</style>
