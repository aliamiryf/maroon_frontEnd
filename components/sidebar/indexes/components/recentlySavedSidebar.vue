<template>
  <div>
    <p class="titleArea">
      اخیرا ذخیره کرده‌اید
    </p>
    <div class="line red"></div>
    <div>
      <div class="singleArticle mt-7" v-for="n in 4">
          <v-row >
            <v-col cols="1">
              <v-avatar size="30">
                <img src="../../../../assets/pic/demo.jpeg" alt="">
              </v-avatar>
            </v-col>
            <v-col cols="11">
              <p style="font-size: 6pt;margin-top: 7px;margin-right: 5px">علی امیری</p>
            </v-col>
          </v-row>
        <p class="titleArticle font-weight-bold">چه طور در مترو به صورت سالم سفر کنیم</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.titleArea{
  font-size: 13pt;
}
.titleArticle{
  font-size: 11pt;
}

</style>
