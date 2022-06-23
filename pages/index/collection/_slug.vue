<template>
  <div class="mt-12">
    <v-container>
      <div class="text-center">
        <img src="@/assets/pic/blogging.png" width="100px"  alt="">
        <h3>
          مقالات لیست
          <span class="red--text" >
             برنامه نویسی
           </span>
        </h3>
        <p class="mt-3 font-weight-thin">
          ایجاد شده توسط
          <span class="brand--text">
            علی امیری
          </span>
        </p>
      </div>
      <v-row>
        <v-col cols="12" lg="8">
          <ListViewArticle class="mt-10"/>
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
export default {
  components: {IndexSidebar, ListViewArticle}
}
</script>

<style scoped>

</style>
