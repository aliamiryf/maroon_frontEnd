<template>
  <div>
    <v-container>
      <div class="text-center">
        <img src="@/assets/pic/blogging.png" width="100px"  alt="">
        <h3>
          لیست‌های ساخته شده توسط نویسندگان
          <span class="red--text" >
             نارون
           </span>
        </h3>
      </div>
      <v-row>
        <v-col cols="12" lg="8">
          <HorizontalSingleCollection v-for="n in 10" class="mt-10"/>
        </v-col>
        <v-col cols="12" lg="4">
          <IndexSidebar/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import IndexSidebar from "@/components/sidebar/indexes/indexSidebar";
import HorizontalSingleCollection from "@/components/collection/single/horizontalSingleCollection";
export default {
  components: {HorizontalSingleCollection, IndexSidebar}
}
</script>

<style scoped>

</style>
