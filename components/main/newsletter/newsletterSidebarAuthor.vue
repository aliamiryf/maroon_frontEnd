<template>
  <div>
    <div class="newsletter mt-15 px-5 py-5 shadow-wrapper" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="newsletterIcon d-flex text-center px-2">
        <v-icon>mdi-email-newsletter</v-icon>
        <div>خبرنامه</div>
      </div>
      <div class="image text-center">
        <img src="../../../assets/pic/newsletter_sidebar.jpg" width="250px" alt="">
      </div>
      <p class="text-center px-4 py-4" style="line-height: 20pt">
        برای اطلاع از جدید‌ترین مقالات
        <b class="red--text">علی‌امیری</b>
        در خبرنامه ما عضو شوید
      </p>
      <div class="action ">
        <v-text-field outlined dense label="ایمیل" color="red" hint="اطلاعات شما نزد ما محفوض است">
          <template v-slot:append>
            <v-btn small color="brand" class="mainShadow white--text" style="margin-top: -2px">
              عضویت
            </v-btn>
          </template>
        </v-text-field>
      </div>
    </div>
    <div v-else-if="$vuetify.breakpoint.mdAndDown">
      <div class="newsletterMobile shadow-wrapper">
        <v-row>
          <v-col cols="4">
            <img src="../../../assets/pic/newsletterMobile.png" width="100%" alt="">
          </v-col>
          <v-col cols="8">
            <p class="text-right" style="line-height: 20pt;font-size: 13px">
              برای اطلاع از جدید‌ترین مقالات
              <b class="red--text">علی‌امیری</b>
              در خبرنامه ما عضو شوید
            </p>
            <v-btn small color="brand" class="mainShadow white--text" style="margin-top: -2px">
              عضویت
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.newsletter {
  border: 1px solid #ededed;
  position: relative;
  border-radius: 10px;
}

.newsletterIcon {
  position: absolute;
  right: 38%;
  left: 38%;
  color: grey;
  border: 1px solid #ededed;
  width: 90px;
  padding: 10px;
  border-radius: 10px;
  background: white;
  top: -20px;
}

.newsletter .image {
  margin-top: 10px;
}
.newsletterMobile{
  border: 1px solid #ededed;
  padding: 20px;
  border-radius: 10px;
}
</style>
