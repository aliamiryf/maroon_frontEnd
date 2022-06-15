<template>
  <div class="singleCourse">
    <div class="picArea">
      <img src="../../../assets/pic/demo.jpeg" alt="">
    </div>
    <div class="contentArea px-9 py-9">
      <div class="titleArea font-weight-bold">
        چه طور مقالات بهتری تولید کنیم؟
      </div>
      <div class="priceBox  mt-3 red--text font-weight-bold">
        1,200,000 تومان
      </div>
      <div class="teacher">
        <div class="d-flex">
          <div class="mt-5">
            <v-avatar size="40">
              <img src="../../../assets/pic/demo.jpeg" alt="">
            </v-avatar>
          </div>
          <div class="mr-2 mt-7">
            علی امیری
          </div>
        </div>
      </div>
      <v-divider class="my-3"></v-divider>
      <div class="actionArea mt-5">
        <div class="d-flex justify-space-around mb-2">
          <div>
            10 جلسه
            <v-icon small>mdi-school</v-icon>
          </div>
          <div>
            20 ساعت
            <v-icon small>mdi-clock-time-one</v-icon>
          </div>
        </div>
        <v-btn class="red white--text" width="100%" elevation="0">نمایش جزئیات</v-btn>
      </div>
    </div>


  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.singleCourse {
  height: 480px;
  box-shadow: 0px 20px 40px rgb(24 44 74 / 5%) !important;
}

.picArea {
  height: 200px;
  overflow: hidden;
}

.picArea img {
  width: 100%;
  transition: all .3s ;
}

.contentArea .titleArea {
  font-size: 15pt;
}

.contentArea .priceBox {
  font-size: 10pt;
}

.contentArea .teacher {
  font-size: 10pt;
  font-weight: 100;
}
.actionArea{
  font-size: 10pt;
}


</style>
