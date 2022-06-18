<template>
  <div class="mt-10">
    <p class="font-weight-bold">
        نویسندگان مورد علاقه علی امیری
    </p>
    <div class="red line"></div>
    <v-row class="mt-1 " v-for="n in 4">
      <v-col cols="1">
        <v-avatar size="30">
          <img src="../../../../../assets/pic/demo.jpeg"  width="100%" alt="">
        </v-avatar>
      </v-col>
      <v-col cols="11" class="pr-4">
        رضا میری
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
