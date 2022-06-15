<template>
  <div>
    <div class="titleArea bold-font">{{title}}</div>
    <div class="red redLine"></div>
  </div>
</template>

<script>
export default {
  props:{
    title:String
  }
}
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 600px) {
  .titleArea{
    font-size: 20pt !important;
  }
}
.redLine{
  margin: auto;
  width: 50px;
  height: 2px;
  border-radius: 10px;
}
.titleArea{
  font-size: 25pt;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
}
</style>
