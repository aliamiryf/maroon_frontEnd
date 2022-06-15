<template>
  <div>
    <v-container>
      <div class="d-flex">
        <div>
          <h3 class="bold-font">
            آموزشات
          </h3>
          <p class="subtitle">
            دوره‌های آموزشی کاربردی برای تولید مقالات با کیفیت تر
          </p>
          <div class="red line"></div>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn color="red" class="white--text mainShadow mt-2">
            همه‌دوره‌ها
          </v-btn>
        </div>
      </div>
      <div class="courseArea mt-10">
        <v-row>
          <v-col cols="12" lg="4" v-for="n in 3">
            <SingleCource />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import SingleCource from "@/components/course/single/singleCource";
export default {
  components: {SingleCource}
}
</script>

<style scoped>
.subtitle{
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 8px;
}
</style>
