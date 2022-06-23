<template>
  <div class="mt-10">
    <v-container>
      <div class="d-flex">
        <div>
          <h3 class="bold-font">
            پرطرفدارترین نویسندگان
            <span class="brandName">
              نارون
            </span>
          </h3>
          <div class="line red my-5" v-if="$vuetify.breakpoint.mdAndUp"></div>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn color="red" class="white--text mainShadow mt-2" small>
            همه‌نویسنده‌ها
          </v-btn>
        </div>
      </div>
      <v-row class="mt-4">
        <v-col cols="12" lg="3" v-for="n in 4">
          <SingleAuthor/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleAuthor from "@/components/main/author/singleAuthor";
export default {
  components: {SingleAuthor}
}
</script>

<style scoped>

</style>
