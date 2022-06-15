<template>
  <div class="singleSlider">
    <div class="cover"></div>
    <div class="adsLabel">
      <v-btn x-small class="orange" v-if="ads">
        تبلیغ
        <v-icon>mdi-cash</v-icon>
      </v-btn>
    </div>
    <div class="caption white--text">
      <div class="categoryLabel">
          <CategoryArticleLabelSection/>
          <div class="titleArea bold-font">
            چه طور در مترو به صورت سالم سفر کنیم
          </div>
      </div>
      <p class="readTime">
        6 دقیقه برای مطالعه
      </p>
      <div class="author">
          <p>
            توسط
            <span class="red--text bold-font">علی امیری</span>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryArticleLabelSection from "@/components/main/sections/categoryArticleLabelSection";
export default {
  props:{
    ads:{
      required:false,
      default:false,
    }
  },
  components: {CategoryArticleLabelSection}
}
</script>

<style scoped>
@media (min-width: 200px ) and  (max-width: 600px){
  .singleSlider{
    margin: 10px !important;
  }
}
.singleSlider{
  background: url("../../../../assets/pic/demo.jpeg");
  margin: 25px;
  height: 330px;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.singleSlider:hover .cover{
  opacity: .7;
  transition: all .3s;
}
.cover{
  width: 100%;
  transition: all .3s;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
.caption{
  text-align: right;
  position: absolute;
  right: 40px;
  left: 30px;
  bottom: 30px;
}
.titleArea{
  font-size: 18pt;
  padding-left: 50px;
  line-height: 30pt;
  max-height: 125px;
  overflow: hidden;
}
.author{
  margin-top: -15px;
}
.adsLabel{
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
