<template>
  <div  class="shadow-wrapper singleBox">
    <div class="imageArea" :style="size == 'box' ? 'height : 200px' : 'height : 400px'">
      <img src="../../../../assets/pic/demo.jpeg" width="100%" alt="">
    </div>
    <div class="contentArea px-4 pt-10 text-right">
        <div class="titleArea">
          اصول SOLID به زبان ساده
        </div>
    </div>
    <div class="authorArea py-2 px-2">
      <div class="d-flex">
        <div class="d-flex">
          <div>
            <v-avatar size="40">
              <img src="../../../../assets/pic/demo.jpeg" alt="">
            </v-avatar>
          </div>
          <div>
            <p class="name font-weight-bold"> علی امیری</p>
            <p class="time brand--text">خواندن در ۶ دقیقه</p>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="mt-2">
          <v-icon>mdi-bookmark-outline</v-icon>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    size:{
      default:'box',
    }
  }
}
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 600px) {
  .imageArea{
    height: 200px !important;
  }
}
.singleBox{
  border: 1px solid #ededed;
  border-radius: 5px;
  overflow: hidden;
}
.imageArea{
  /*height: 200px;*/
  overflow: hidden;
}
.imageArea img{
  height: 120%;
}
.contentArea .titleArea{
  font-size: 12pt;
  height: 50px;
  overflow: hidden;
}
.name{
  font-size: 8pt;
  text-align: right;
  margin-right: 8px;
}
.time{
  margin-right: 8px;
  font-size: 8pt;
  margin-top: -10px;
}
</style>
