<template>
  <div>
    <div class="heroHeader  ">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <div class="heroHeaderImg">
              <img src="../../../assets/pic/headerPic.png" width="100%" class="Image">
              <img src="../../../assets/pic/headerBack.png" class="Cover" alt="">
            </div>
          </v-col>
          <v-col>
            <div class="fill-height d-flex justify-space-around flex-column">
              <div class="heroHeaderContent">
                <h2 class="bold-font">دنیای بینهایت کلمات </h2>
                <p>
                  دنیای بینهایت کلمات، دنیای سراسر عجایب است که برای دوست‌داران این حوزه بینهایت و بی انتها به نظر میرسد. در
                    <span class="brandName bold-font font-weight-bold">
                      نارون
                    </span>
                  ما دوست‌داران دنیای کلمات را دور هم جمع کردیم تا مجموعه از عاشقان دنیای کلمات در کنار هم به این حوزه عمق بیشتری بدهند.
                </p>
                <v-btn color="red" class="white--text mainShadow">
                  شروع نوشتن
                  <v-icon class="mr-1">mdi-pencil</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 500px) {
  .heroHeaderImg .Cover{
    margin-top: 12px !important;
    margin-right: 12px !important;
  }
  .heroHeader h2{
    font-size: 20pt !important;
    margin-bottom: 10px;
  }
  .heroHeader p{
    padding: 0px !important;
  }
}
.heroHeader{
  background-repeat: no-repeat;
}
.heroHeaderContent h2{
  font-size: 35pt;
  font-weight: bolder;
}
.heroHeaderContent p{
  line-height: 30pt;
  padding-left: 100px;
}
.heroHeaderImg{
  position: relative;
}
.heroHeaderImg .Cover{
  width: 100%;
  margin-top: 40px;
  margin-right: 40px;
}
.heroHeaderImg .Image{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index:1 ;
}
</style>
