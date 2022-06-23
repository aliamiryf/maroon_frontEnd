<template>
  <div>
      <div class="singleAuthor shadow-wrapper">
          <div class="topbanner blue">

          </div>
        <div class="avatarAuthor">
          <v-avatar style="border: 3px solid #ffffff;" size=50>
            <img src="../../../assets/pic/demo.jpeg" alt="">
          </v-avatar>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.singleAuthor{
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
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
  right: 40%;
}
</style>
