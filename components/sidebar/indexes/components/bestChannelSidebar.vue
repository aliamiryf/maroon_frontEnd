<template>
  <div>
      <p class="titleArea">
        محبوب‌ترین‌ نویسنده‌های
        <span class="brandName bold-font">نارون</span>
      </p>
      <div class="line red mb-5"></div>
      <SingleAuthorListView v-for="n in 5"/>
  </div>
</template>

<script>
import SingleAuthorListView from "@/components/main/author/singleAuthorListView";
export default {
  components: {SingleAuthorListView}
}
</script>

<style scoped>
.titleArea{
  font-size: 13pt;
}
</style>
