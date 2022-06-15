<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-avatar>
          <img src="../../../assets/pic/demo.jpeg" alt="">
        </v-avatar>
      </v-col>
      <v-col cols="10">
          <p class="nameArea font-weight-bold">
            علی امیری
            <v-btn  x-small color="red" elevation="0"  text>دنبال کردن</v-btn>
          </p>
          <p class="follower">226 دنبال‌کننده</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nameArea{
  font-size: 10pt;
}
.follower{
  font-size: 8pt;
}
</style>
