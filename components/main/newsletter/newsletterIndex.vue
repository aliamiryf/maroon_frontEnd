<template>
  <div class="newsletter px-2 py-5 d-flex justify-space-around ">
    <div class="contentArea fill-height px-lg-2 py-lg-2">
      <img src="../../../assets/pic/newsletter_index.jpg" width="300px" alt="">
        <h3>عضویت در خبرنامه</h3>
        <p class="grey--text">با عضویت در خبرنامه ما از جدیدترین مقالات و خدمات ما مطلع میشوید</p>
        <div class="formArea px-lg-15">
          <v-text-field outlined dense label="ایمیل" color="red" hint="اطلاعات شما نزد ما محفوض است">
            <template v-slot:append>
              <v-btn small color="brand" class="mainShadow white--text" style="margin-top: -2px">
                عضویت
              </v-btn>
            </template>
          </v-text-field>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 600px) {
  .contentArea{
    width: 90% !important;
    padding: 20px;
  }
}
.newsletter{
}
.contentArea{
  width: 500px;
  background: white;
  box-shadow: 0px 20px 40px rgb(24 44 74 / 5%) !important;
  text-align: center;
}
.contentArea p{
  font-size: 10pt;
}
</style>
