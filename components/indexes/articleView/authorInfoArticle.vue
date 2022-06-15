<template>
  <div>
    <div class="authorInfoAndDESC">
      <div class="shortLink mt-5 ">
        اصول SOLID به پنج قسمت قسمت تقسیم میشه که از مهمترین اصول توی برنامه‌نویسی شی‌گرا به حساب میان
      </div>
      <div class="authorInfo mt-10">
        <div class="d-flex">
          <v-avatar>
            <img src="../../../assets/pic/demo.jpeg" alt="">
          </v-avatar>
          <div>
            <p class="authorName mr-2">علی امیری</p>
            <p class="authorDesc mr-2">زنده به آن ایم که نمانیم زنده به آن ایم که نمانیم این مدلی</p>
          </div>
          <div>
            <v-btn color="brand" class="white--text mr-3 mt-2" elevation="0" small>دنبال‌کردن</v-btn>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shortLink{
  padding: 15px 20px 20px;
  background-color: #ededed;
  border-radius: 10px;
  color: #424851;
  height: 70px;
  overflow: hidden;
  line-height: 32pt;
}
.authorInfo .authorName{
  font-size: 10pt;
  line-height: 0px;
  margin-top: 10px;
}
.authorInfo .authorDesc{
  font-size: 8pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  margin-top: 10px;
}
</style>
