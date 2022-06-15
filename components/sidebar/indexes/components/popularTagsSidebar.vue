<template>
  <div>
    <p class="titleArea">
      برچسب‌های پرطرفدار
    </p>
    <div class="line red"></div>
    <div class="mt-2">
      <v-btn v-for="n in 10" color="mx-2 my-2" elevation="0" text>
        #
        برچسب
      </v-btn>
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
</style>
