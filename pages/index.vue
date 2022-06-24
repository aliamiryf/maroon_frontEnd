<template>
  <div>
    <IndexesNavbar/>
    <nuxt-child/>
    <NewsletterIndex class="mt-15"/>
    <Indexfooter class="mt-10"/>
    <BottomNavigationMenu v-if="$vuetify.breakpoint.smAndDown" />
  </div>
</template>

<script>


import IndexesNavbar from "@/components/indexes/indexesNavbar";
import Indexfooter from "@/components/main/footer/indexfooter";
import BottomNavigationMenu from "@/components/indexes/index/bottomNavigationMenu";
import NewsletterIndex from "@/components/main/newsletter/newsletterIndex";
export default {
  // layout: 'mainLayout',
  components: {NewsletterIndex, BottomNavigationMenu, Indexfooter, IndexesNavbar},
  data(){
    return{
      value:true
    }
  }
}
</script>

<style scoped>
.mobileMenu{
  background-color: white;
  width: 75%;
  margin-bottom: 30px;
  border-radius: 20px;
}
</style>
