<template>
  <div>
    <IndexesNavbar/>
    <div class=" mt-15  mb-10 text-center">
      <div>
        <img src="../../assets/pic/notFound.png" width="500" alt="">
      </div>
        <h3 class="mt-10">
          متاسفانه صفحه مورد نظر شما پیدا نشد!
        </h3>
      <v-btn color="brand" class="white--text mt-5 mainShadow">
        بازگشت به صفحه اصلی
      </v-btn>
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" v-for="n in 3" class="mt-10">
            <SingleArticleBox/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Indexfooter/>
  </div>
</template>

<script>
import IndexesNavbar from "@/components/indexes/indexesNavbar";
import Indexfooter from "@/components/main/footer/indexfooter";
import SingleArticleBox from "@/components/main/article/single/singleArticleBox";
export default {
  components: {SingleArticleBox, Indexfooter, IndexesNavbar}
}
</script>

<style scoped>

</style>
