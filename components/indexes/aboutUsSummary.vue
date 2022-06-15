<template>
  <div class="aboutUs">
    <v-container>
      <v-row>
        <v-col cols="12" lg="5">
          <div class="d-flex justify-space-around flex-column fill-height">
            <div class="content white--text px-5 py-5">
              <h2 class="brandName bold-font">نارون</h2>
              <p>
                دنیای بینهایت کلمات، دنیای سراسر عجایب است که برای دوست‌داران این حوزه بینهایت و بی انتها به نظر میرسد. در
                نارون ما دوست‌داران دنیای کلمات را دور هم جمع کردیم تا مجموعه از عاشقان دنیای کلمات در کنار هم به این حوزه
                عمق بیشتری بدهند.
              </p>
              <div class="d-flex mt-10">
                <v-btn small color="red" class="white--text mainShadow">
                  شروع نوشتن
                  <v-icon small class="mr-1">mdi-pencil</v-icon>
                </v-btn>
                <v-btn small color="red" outlined class="white--text mainShadow mr-2">
                  درباره‌ نارون
                </v-btn>
                <v-btn small color="red" outlined class="white--text mainShadow mr-2">
                  سوالات‌ متداول
                </v-btn>

              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="7">
          <div class="content py-5 px-5 white--text">
            <v-row>
              <v-col cols="6" lg="4" >
                <v-card class="mainShadow text-center px-2 py-2">
                  <img src="../../assets/pic/3703299.png" width="50%" alt="">
                  <p>
                    ابزار‌های نظارت بر
                    رفتار کاربران
                  </p>
                </v-card>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card class="mainShadow text-center px-2 py-2">
                  <img src="../../assets/pic/notification.png" width="50%" alt="">
                  <p>ارسال نوتیفیکیشن برای کاربران شما</p>
                </v-card>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card class="mainShadow text-center px-2 py-2">
                  <img src="../../assets/pic/report.png" width="50%" alt="">
                  <p>ابزار‌های گزارش‌گیری از مقالات شما</p>
                </v-card>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card class="mainShadow text-center px-2 py-2">
                  <img src="../../assets/pic/google_analetics.png" width="50%" alt="">
                  <p>
                    درسترسی به اطلاعات گوگل آنالیتیکس
                  </p>
                </v-card>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card class="mainShadow text-center px-2 py-2">
                  <img src="../../assets/pic/moneyTiz.png" width="50%" alt="">
                  <p>کسب‌ درآمد از طریق تولید محتوا</p>
                </v-card>
              </v-col >
              <v-col cols="6" lg="4">
                <v-card class="mainShadow text-center px-2 py-2">
                  <img src="../../assets/pic/ads.png" width="50%" alt="">
                  <p>ابزار‌های تبلغاتی برای افزایش درآمد شما</p>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavbarLogo from "@/components/logo/navbarLogo";

export default {
  components: {NavbarLogo}
}
</script>

<style scoped>
.aboutUs {
  background: url("../../assets/pic/aboutUs.png") no-repeat white;
  background-size: cover;
  background-position: center;
  /*height: 400px;*/
}

.content h2 {
  font-size: 20pt;
}

.content p {
  line-height: 25pt;
}
</style>
