<template>
  <div>
    <SingleArticleTextOnPic :ads="true" style="margin: 0px !important;"/>
  </div>
</template>

<script>
import SingleArticleTextOnPic from "@/components/main/article/single/singleArticleTextOnPic";
export default {
  components: {SingleArticleTextOnPic}
}
</script>

<style scoped>
.adsArea{
  height: 400px;
  overflow: hidden;
  position: relative;
}
.adsArea img{
  width: 120%;
  height: 120%;
  margin-left: 10%;
}
.cover{
  background: black;
  opacity: 0.5;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
