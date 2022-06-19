<template>
  <div class="mt-10">
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" lg="4" v-for="n in 9">
          <div class="singleCategory">
            <img src="../../../assets/pic/demo.jpeg" alt="">
            <p>
              برنامه نویسی
            </p>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.singleCategory{
  height: 100px;
  background: #000;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
}
.singleCategory:hover img{
  opacity: .3;
  transition: all .3s;
}
.singleCategory img{
  width: 140%;
  height: 200%;
  opacity: 0.4;
  transition: all .3s;
}
.singleCategory p{
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
