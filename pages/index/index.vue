<template>
  <div>
    <HeroHeader/>
    <LastArticleSliderIndex/>
    <v-container class="mt-15 mb-15">
      <v-row>
        <v-col cols="12" lg="8">
          <PopularAndForYouITabIndex/>
        </v-col>
        <v-col cols="12" lg="4">
          <IndexSidebar/>
        </v-col>
      </v-row>
    </v-container>
    <br>
    <br>
    <AboutUsSummary class="mt-10"/>
    <CourseSection class="mt-15"/>
    <PopluarAuthor/>
    <br>
    <br>
  </div>
</template>

<script>
/*eslint-disable*/
import HeroHeader from "@/components/indexes/index/heroHeader";
import LastArticleSliderIndex from "@/components/indexes/index/lastArticleSliderIndex";
import PopularAndForYouITabIndex from "@/components/indexes/index/popularAndForYouITabIndex";
import IndexSidebar from "@/components/sidebar/indexes/indexSidebar";
import AboutUsSummary from "@/components/indexes/aboutUsSummary";
import CourseSection from "@/components/indexes/index/courseSection";
import NewsletterIndex from "@/components/main/newsletter/newsletterIndex";
import Indexfooter from "@/components/main/footer/indexfooter";
import PopluarAuthor from "@/components/indexes/index/popluarAuthor";

export default {
  components: {
    PopluarAuthor,
    Indexfooter,
    NewsletterIndex,
    CourseSection,
    AboutUsSummary, IndexSidebar, PopularAndForYouITabIndex, LastArticleSliderIndex, HeroHeader
  },
  mounted() {
    this.$requestHandler({
      key:'article',
      name:'createArticle',
      header:{
        here:'here'
      },
      payload:{
        name:'ali',
      }
    })
  }
}
</script>

<style scoped>

</style>
