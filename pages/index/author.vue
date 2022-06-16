<template>
  <div class="">
    <v-container class="mt-15">
      <v-row>
        <v-col cols="12" lg="8">
          <Nuxt/>
        </v-col>
        <v-col cols="12" lg="4">
          <AuthorSidebar/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AuthorSidebar from "@/components/sidebar/indexes/authorSidebar";

export default {
  components: {AuthorSidebar}
}
</script>

<style scoped>

</style>
