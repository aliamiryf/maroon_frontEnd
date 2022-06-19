<template>
  <div class="sidebar fill-height">
    <div class="contentSidebar">
      <CategoryAuthor/>
      <NewsletterSidebarAuthor/>
      <FollowByAuthor/>
      <MainADSSingleAdsTextOnPic class="mt-10" v-if="$vuetify.breakpoint.mdAndUp"/>
    </div>
  </div>
</template>

<script>
import CategoryAuthor from "@/components/sidebar/indexes/components/author/categoryAuthor";
import FollowByAuthor from "@/components/sidebar/indexes/components/author/followByAuthor";
import NewsletterSidebarAuthor from "@/components/main/newsletter/newsletterSidebarAuthor";
export default {
  components: {NewsletterSidebarAuthor, FollowByAuthor, CategoryAuthor}
}
</script>

<style scoped>
.sidebar{
  position: relative;
}
.contentSidebar{
  position: sticky;
  top: 10px;
}
</style>
