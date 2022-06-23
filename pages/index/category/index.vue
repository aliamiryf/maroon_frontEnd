<template>
  <div class="mt-10">
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" lg="4" v-for="n in 9">
          <SignleCategory/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SignleCategory from "@/components/main/category/signleCategory";
export default {
  components: {SignleCategory}
}
</script>

<style scoped>

</style>
