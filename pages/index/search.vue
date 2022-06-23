<template>
  <div class="mt-12">
    <v-container>
      <div class="text-center">
        <img src="@/assets/pic/blogging.png" width="100px"  alt="">
        <h3>
          نتایج جست‌و‌جو
          <span class="red--text" >
             برنامه نویسی
           </span>
        </h3>
      </div>
      <v-row>
        <v-col cols="12" lg="8">
          <h2 class="mt-10">
            مقالات مرتبط
          </h2>
          <div class="line brand mt-2"></div>
          <ListViewArticle class="mt-10"/>

          <h2 class="mt-10">
            نویسندگان مرتبط
          </h2>
          <div class="line brand mt-2"></div>
          <v-row class="mt-4">
            <v-col cols="12" lg="4" v-for="n in 6">
              <SingleAuthor/>
            </v-col>
          </v-row>

          <h2 class="mt-10">
            لیست‌های مرتبط
          </h2>
          <div class="line brand mt-2"></div>
          <HorizontalSingleCollection v-for="n in 5" class="mt-5"/>
        </v-col>
        <v-col cols="12" lg="4">
          <IndexSidebar/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ListViewArticle from "@/components/main/article/collection/list/listViewArticle";
import IndexSidebar from "@/components/sidebar/indexes/indexSidebar";
import SingleAuthor from "@/components/main/author/singleAuthor";
import HorizontalSingleCollection from "@/components/collection/single/horizontalSingleCollection";
export default {
  components: {HorizontalSingleCollection, SingleAuthor, IndexSidebar, ListViewArticle}
}
</script>

<style scoped>

</style>
