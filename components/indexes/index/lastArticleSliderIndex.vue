<template>
  <div class="">
    <TitleBoxSection title="جدید‌ترین مقالات" class="mt-10"/>
    <div class="sliderArea">
      <div class="slider">
        <template v-if="itemShow != null">
          <hooper :rtl="true" center-mode :items-to-show="itemShow" infinite-scroll style="height: 360px" ref="carousel"  :wheel-control="false">
            <slide v-for="n in 10">
              <SingleArticleTextOnPic :key="n"/>
            </slide>
          </hooper>
        </template>
        <div class="arrow mt-lg-10 pb-2">
          <v-icon :size="$vuetify.breakpoint.mdAndUp ? 40 : 30" class="ml-2" @click="slideNext">mdi-arrow-right</v-icon>
          <v-icon :size="$vuetify.breakpoint.mdAndUp ? 40 : 30" class="mr-2" @click="slidePrev">mdi-arrow-left</v-icon>
        </div>
      </div>
      <div class="cover ">

      </div>
    </div>
  </div>
</template>

<script>
import TitleBoxSection from "@/components/main/sections/titleBoxSection";
import {Hooper, Slide} from 'hooper';
import 'hooper/dist/hooper.css';
import SingleArticleTextOnPic from "@/components/main/article/single/singleArticleTextOnPic";

export default {
  components: {SingleArticleTextOnPic, TitleBoxSection, Hooper, Slide},
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
  data() {
    return {
      itemShow: null
    }
  },
  created() {
    this.$nextTick().then(()=>{
      this.itemShow = this.$vuetify.breakpoint.mdAndUp ? 4 : 1.2
    })
  },
  computed: {}
}
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 600px) {
  .cover {
    width: 70% !important;
    margin-top: -300px !important;
  }
}

.slider {
  text-align: center;
  /*position: absolute;*/
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
}

.sliderArea {
  position: relative;
}

.cover {
  background: #ededed;
  z-index: 1 !important;
  margin: -250px auto auto auto;
  height: 300px;
  width: 60%;
  border-radius: 10px;
}

</style>
