<template>
  <div class="sidebar fill-height">
    <div class="sidebarInner">
      <ShortDescSidebar/>
      <BestChannelSidebar class="mt-10"/>
      <SingleAdsTextOnPic class="mt-10"/>
      <PopularTagsSidebar class="mt-15"/>
      <RecentlySavedSidebar class="mt-15"/>
    </div>
  </div>
</template>

<script>
import ShortDescSidebar from "@/components/sidebar/indexes/components/index/shortDescSidebar";
import BestChannelSidebar from "@/components/sidebar/indexes/components/index/bestChannelSidebar";
import SingleAdsTextOnPic from "@/components/main/ADS/singleAdsTextOnPic";
import PopularTagsSidebar from "@/components/sidebar/indexes/components/index/popularTagsSidebar";
import RecentlySavedSidebar from "@/components/sidebar/indexes/components/index/recentlySavedSidebar";
export default {
  components: {RecentlySavedSidebar, PopularTagsSidebar, SingleAdsTextOnPic, BestChannelSidebar, ShortDescSidebar}
}
</script>

<style scoped>
.sidebar{
  position: relative;
}
.sidebarInner{
  position: sticky;
  top: 20px;
}
</style>
