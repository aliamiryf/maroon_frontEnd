<template>
  <div class="mb-10">
      <v-row>
        <v-col cols="12" lg="4" class="">
          <div class="imageArea">
            <img src="../../../../assets/pic/demo.jpeg" alt="">
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <CategoryArticleLabelSection/>
          <div class="titleArea mt-3 bold-font">
            چه طور در مترو به صورت سالم سفر کنیم
          </div>
          <div class="descArea mt-3">
            بهترین زبان های برنامه نویسی جهان همیشه بیشترین زمان را در اختبار دارند تا بیشتر برنامه نویسی را کنند
          </div>
          <div class="line my-3"></div>
          <div class="timeRead grey--text">6 دقیقه برای مطالعه</div>
          <div class="authorArea">
            <div class="d-flex">
              <AuthorLabel class="mt-2"/>
              <div class="mt-3 mr-2">
                - 1400/03/23
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import CategoryArticleLabelSection from "@/components/main/sections/categoryArticleLabelSection";
import AuthorLabel from "@/components/main/author/authorLabel";
export default {
  components: {AuthorLabel, CategoryArticleLabelSection}
}
</script>

<style scoped>
.imageArea{
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: red;
  border-radius: 5px;
}
.imageArea img{
  width: 130%;
  height: 130%;
  margin-right: -30px;
  transition: all .3s;
}
.imageArea img:hover{
  transition: all .3s;
  transform: scale(1.3);
}
.titleArea{
  font-size: 15pt;
  height: 26px;
  line-height: 25px;
  overflow: hidden;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.descArea{
  max-height: 48px;
  overflow: hidden;
}
</style>
