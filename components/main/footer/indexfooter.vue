<template>
  <div>
    <v-divider></v-divider>
    <v-footer color="white" class="mt-5">
        <v-container>
          <v-row class="my-10">
            <v-col cols="12"  lg="3">
              <img src="@/assets/logo/logo.png" width="80" alt="">
              <p> محلی برای انتشار و کسب‌درآمد از مقالات با ابزار‌های کاربردی برای رصد رفتار‌های کاربران </p>
              <v-btn fab elevation="0" color="blue" class="white--text " x-small>
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn fab elevation="0" color="green" class="white--text mr-2" x-small>
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn>
              <v-btn fab elevation="0" color="red" class="white--text mr-2" x-small>
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" class="px-10" lg="3">
              <h3>
                بخش‌ها
              </h3>
              <ul class="mt-4">
                <li>مقالات</li>
                <li>دسته‌بندی‌ها</li>
                <li>برچسب‌ها</li>
                <li>نویسندگان</li>
              </ul>
            </v-col>
            <v-col cols="12" class="px-10" lg="3">
              <h3>
                خدمات
              </h3>
                <ul>
                  <li>کسب‌درآمد</li>
                  <li>ابزار‌های گزارش‌گیری</li>
                  <li>ابزار‌های مارکتینگ</li>
                </ul>
            </v-col>
            <v-col cols="12" lg="3">
              <h3>
                مجوز‌های ما
              </h3>

            </v-col>
          </v-row>
          <v-divider></v-divider>
          <p style="color: #424851" class="text-center mt-5">
            Created by
            <span class="red--text bold-font">
              maroon
            </span>
            · Copyright 2022 · All rights reserved
          </p>
        </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p{
  font-size: 9pt;
  line-height: 15pt;
}
ul{
  font-size: 10pt;
  color: grey;
  line-height: 30pt;
  list-style-type: none;
}
</style>
