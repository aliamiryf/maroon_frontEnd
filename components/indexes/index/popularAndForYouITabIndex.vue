<template>
  <div>
    <v-tabs
      v-model="tab"
      color="red"
    >
      <v-tabs-slider color="red"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
      >
        <p class="bold-font">
          {{ item }}
        </p>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card >
          <v-card-text>
            <PopluarArticles/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card >
          <v-card-text>
            <ForYou/>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import PopluarArticles from "@/components/indexes/index/popluarArticles";
import ForYou from "@/components/indexes/index/forYou";
export default {
  components: {ForYou, PopluarArticles},
  data(){
    return {
      tab: null,
      items: [
        'محبوب‌ترین‌ها', 'مناسب‌شما',
      ],
    }
  }
}
</script>

<style scoped>

</style>
