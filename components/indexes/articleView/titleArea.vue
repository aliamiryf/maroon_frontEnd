<template>
  <div>
    <div class="titleArea mt-10">
      <h1 class="bold-font">
        اصول SOLID به زبان ساده
      </h1>
      <div class="d-flex mt-4 justify-space-between flex-wrap">
        <div class="subtitle">
          انتشار در ۱۴۰۰/۰۳/۰۲
          <span class="mx-5">|</span>
          <span class="bold-font brand--text">طراحی‌وب</span>
          <span class="mx-5">|</span>
          مدت زمان تقریبی مطالعه ۲۵ دقیقه
        </div>
        <div :class="$vuetify.breakpoint.smAndDown ? 'mt-5':''">
          <v-icon>mdi-heart-outline</v-icon>
          <v-icon>mdi-bookmark-outline</v-icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </div>
      </div>
      <div class="mt-10">
        <img src="@/assets/pic/demo.jpeg" class="primaryPic" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.titleArea h1 {
  line-height: 30pt;
  font-size: 20pt;
}

.titleArea .subtitle {
  font-size: 10pt !important;
}
.primaryPic{
  width: 100%;
  border-radius: 10px;
}
</style>
