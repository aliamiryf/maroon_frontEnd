<template>
  <div>
    <v-container>
      <div class="heroHeader">
        <v-row>
          <v-col cols="12" lg="7">
            <div class="content fill-height d-flex justify-space-around  flex-column">
              <div class="">
                <h2>
                  مناسب‌ترین محتوا‌های روی
                  <span class="red--text bold-font">
                  نارون
                </span>
                  برای شما
                </h2>
                <p>
                  در این صفحه، از روی اطلاعاتی که از فعالیت های شما روی نارون جمع‌آوری شده است، بهترین محتوا‌های موجود
                  روی نارون برای شما
                  آماده کرده‌ایم. فعالیت بیشتر شما در نارون باعث جمع‌آوری اطلاعات بیشری از شما شده و به ما کمک می‌کند تا
                  محتواهای مناسب تری برای شما انتخاب کنیم
                </p>
                <v-btn color="brand" class="white--text mainShadow">همه مقالات</v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="5">
            <img src="../../assets/pic/suggest.png" width="100%" alt="">
          </v-col>
        </v-row>
      </div>
      <div class="articleForYou mt-10 mb-10">
        <v-row>
          <v-col cols="12" lg="3">
            <div class="fill-height d-flex flex-column justify-space-around">
              <div>
                <img src="../../assets/pic/suggest_article.png" width="100%" alt="">
                <div class="titleSuggestArea text-center font-weight-bold mt-4">
                  مناسب‌ترین مقالات برای‌شما
                  <br>
                  <v-btn color="brand" class="white--text mainShadow mt-4" small>همه مقالات</v-btn>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="9">
            <v-row>
              <v-col cols="12" lg="4" v-for="n in 6">
                <SingleArticleBox/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="categoryForYou mt-10">
        <v-row>
          <v-col cols="12" lg="9">
            <v-row>
              <v-col cols="12" lg="4" v-for="n in 6">
                <SignleCategory/>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="3">
            <div class="fill-height d-flex flex-column justify-space-around">
              <div>
                <img src="../../assets/pic/category_article.png" width="100%" alt="">
                <div class="titleSuggestArea text-center font-weight-bold mt-4">
                  مناسب‌ترین دسته‌بندی‌ها برای شما
                  <br>
                  <v-btn color="brand" class="white--text mainShadow mt-4" small>همه مقالات</v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="authorForYou mt-10">
        <v-row>
          <v-col cols="12" lg="3">
            <div class="fill-height d-flex flex-column justify-space-around">
              <div>
                <img src="../../assets/pic/author_suggest.png" width="100%" alt="">
                <div class="titleSuggestArea text-center font-weight-bold mt-4">
                  مناسب‌ترین نویسندگان برای شما
                  <br>
                  <v-btn color="brand" class="white--text mainShadow mt-4" small>همه مقالات</v-btn>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="9">
            <v-row>
              <v-col cols="12" lg="4" v-for="n in 6">
                <SingleAuthor/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>

    </v-container>
  </div>
</template>

<script>
import SingleArticleBox from "@/components/main/article/single/singleArticleBox";
import SignleCategory from "@/components/main/category/signleCategory";
import SingleAuthor from "@/components/main/author/singleAuthor";

export default {
  components: {SingleAuthor, SignleCategory, SingleArticleBox}
}
</script>

<style scoped>
.content p {
  line-height: 25pt;
  padding-left: 110px;
  margin-top: 10px;
}
.categoryForYou{
  margin-top: 120px;
}
</style>
