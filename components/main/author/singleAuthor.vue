<template>
  <div>
      <div class="singleAuthor shadow-wrapper">
        <div class="topbanner"></div>
        <div class="avatarAuthor">
          <v-avatar style="border: 3px solid #ffffff;" size=50>
            <img src="../../../assets/pic/demo.jpeg" alt="">
          </v-avatar>
        </div>
        <div class="mt-7 text-center">
          <p class="nameAuthor">علی امیری</p>
          <p class="descAuthor">
            من برنامه‌نویس وب هستم و سعی میکنم بهترین مقالات را برای شما میذارم
          </p>
        </div>
        <div class="d-flex justify-space-between mx-4 mt-4">
          <div>
            <div class="text-center">
              <v-btn color="brand" class="white--text mainShadow mt-2" small>
                دنبال‌کردن
              </v-btn>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="grey--text mt-2 ">
            25
            <v-icon color="grey" small>mdi-note-text</v-icon>
          </div>
          <div class="grey--text mt-2 mr-2">
            25
            <v-icon color="grey" small>mdi-account</v-icon>
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
.singleAuthor:hover{
  transition: all .3s;
  box-shadow: 0 10px 15px 0 rgb(241 59 59 / 20%) !important;
}
.singleAuthor{
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all .3s;
}
.topbanner{
  height: 50%;
  background: url("../../../assets/pic/demo.jpeg");
  background-size: cover;
  border-radius: 0px 0px 210px 210px;
}
.avatarAuthor{
  position: absolute;
  top: 40%;
  right: 44%;
}
.nameAuthor{
  font-weight: bolder;
}
.descAuthor{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 10px;
  font-size: 12px ;
}
</style>
