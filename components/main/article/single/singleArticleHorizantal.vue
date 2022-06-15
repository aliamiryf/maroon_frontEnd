<template>
  <div>
    <div class="singleArticle mt-10 mx-10">
      <v-row>
        <v-col cols="12" lg="3" class="picArea">
          <v-chip x-small color="brand" class="white--text labelRecommend" >پیشنهاد نویسنده</v-chip>
          <img src="../../../../assets/pic/demo.jpeg"  width="100%" alt="">
        </v-col>
        <v-col cols="12" lg="9">
          <div class="contentArea px-7 py-10">
            <div class="titleArea">
              اصول SOLID به زبان ساده
            </div>
            <div class="Desc">
              بهترین زبان های برنامه نویسی جهان همیشه بیشترین زمان را در اختبار دارند تا بیشتر برنامه نویسی را کنند
              بهترین زبان های برنامه نویسی جهان همیشه بیشترین زمان را در اختبار دارند تا بیشتر برنامه نویسی را کنند
              بهترین زبان های برنامه نویسی جهان همیشه بیشترین زمان را در اختبار دارند تا بیشتر برنامه نویسی را کنند
              بهترین زبان های برنامه نویسی جهان همیشه بیشترین زمان را در اختبار دارند تا بیشتر برنامه نویسی را کنند
              بهترین زبان های برنامه نویسی جهان همیشه بیشترین زمان را در اختبار دارند تا بیشتر برنامه نویسی را کنند
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (min-height: 200px) and (min-height: 600px) {
  .singleArticle{
    height: auto !important;
  }
  .picArea img{
    /*height: 100% !important;*/
  }
  .contentArea .titleArea{
    width: 185px !important;
    font-size: 13pt !important;
  }
}
.singleArticle{
  height: 200px;
  overflow: hidden;
  border: 1px solid #ededed;
  border-radius: 15px;
  box-shadow: 0px 20px 40px rgb(24 44 74 / 5%) !important;
}
.picArea{
  overflow: hidden;
  position: relative;
}
.picArea img{
  width: 110%;
  height: 110%;
}
.contentArea .titleArea{
  font-weight: bolder;
  font-size: 15pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 400px;
}
.contentArea .Desc{
  max-height: 77px;
  overflow: hidden;
  font-size: 10pt;
  line-height: 18pt;
}
.labelRecommend{
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
