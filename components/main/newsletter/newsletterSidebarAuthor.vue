<template>
  <div class="newsletter mt-15 px-5 py-5">
    <div class="newsletterIcon d-flex text-center px-2">
      <v-icon>mdi-email-newsletter</v-icon>
      <div>خبرنامه</div>
    </div>
    <div class="image">
      <img src="../../../assets/pic/newsletter_sidebar.jpg" width="100%" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.newsletter{
  border: 1px solid #ededed;
  position: relative;
}
.newsletterIcon{
  position: absolute;
  right: 38%;
  left: 38%;
  color: grey;
  border: 1px solid #ededed;
  width: 90px;
  padding: 10px;
  border-radius: 10px;
  background: white;
  top: -20px;
}
</style>
