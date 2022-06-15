<template>
  <div class="mt-10">
    <v-container>
      <TitleArea/>
      <AuthorInfoArticle/>
      <div class="articleContent mt-10 px-5 py-5">
        <div data-v-6b838f84=""><p data-v-6b838f84="">سلام دوستان من علی نظری هستم. برنامه‌نویس و توسعه دهنده وب. توی
          این مقاله اصول SOLID رو با هم بررسی میکنیم.</p>
          <p data-v-6b838f84="">SOLID (سالید) یک کلمه مخفف برای 5 اصل هست. هدف معرفی این اصول اینه که برنامه‌ها قابل
            درک‌تر، انعطاف‌پذیر تر و بیشتر قابل نگهداری باشن. به عنوان یک برنامه‌نویس، توسعه‌دهنده و مهندس نرم‌افزار،
            یادگیری این پنج اصل جزو "باید" ها هست. این اصول میتونن توی هر طراحی شی‌گرایی اعمال بشن.</p>
          <p data-v-6b838f84="">سالید بر پایه پنج اصل زیر هست. من برای هر کدوم از این اصول توضیحات آکادمیک و رسمی اون
            اصل رو نوشتم و برای درک بهتر هر اصل، لینک توضیح کامل و اختصاصی رو براتون قرار دادم.</p>          <img
            src="../../../assets/pic/demo.jpeg" alt="">
          <h3 data-v-6b838f84="">&nbsp;</h3>
          <h3 data-v-6b838f84="">1. اصل تک مسئولیتی (Single Responsibility Principle)</h3>
          <p data-v-6b838f84="">هر کلاسی که توی برنامه‌ی ما وجود داره، باید یک مسئولیت خاص و مشخص داشته. در واقع این
            کلاس باید فقط و فقط مسئول یک عملکرد توی برنامه باشه.</p>
          <p data-v-6b838f84="" style="text-align: center;"><a data-v-6b838f84=""
                                                               href="http://ditty.ir/posts/solid-single-responsibility-principle/Xyz0J"
                                                               target="_blank"><u data-v-6b838f84="">توضیح کامل و
            اختصاصی اصل تک مسئولیتی</u></a></p>
          <p data-v-6b838f84="">&nbsp;</p>
          <h3 data-v-6b838f84="">2. اصل باز - بسته (Open/Closed Principle)</h3>
          <p data-v-6b838f84="">موجودیت‌های یک نرم‌افزار (کلاس‌ها، ماژول‌ها، توابع و ...) باید برای توسعه داده شدن،
            <strong data-v-6b838f84="">باز</strong> و برای تغییر دادن، <strong data-v-6b838f84="">بسته</strong> باشن</p>
          <p data-v-6b838f84="" style="text-align: center;">
          <div>
            <div>
              <img src="../../../assets/pic/demo.jpeg" alt="">
            </div>
          </div>
          <u data-v-6b838f84=""><a data-v-6b838f84="" href="http://ditty.ir/posts/solid-open-closed-principle/XOgZX"
                                   target="_blank">توضیح کامل و اختصاصی اصل باز - بسته</a></u></p><p data-v-6b838f84="">
            &nbsp;</p>
          <h3 data-v-6b838f84="">3. اصل جایگزینی لیسکوف (Liskov Substitution Principle)</h3>
          <p data-v-6b838f84="">اگر S یک زیر کلاس T باشه، آبجکت‌های نوع T باید بتونن بدون تغییر دادن کد برنامه، با
            آبجکت‌های نوع S جایگزین بشن.<br data-v-6b838f84=""> به بیان ساده‌تر کلاس‌های فرزند نباید رفتار و ویژگی‌های
            کلاس والد رو تغییر بدن</p>
          <p data-v-6b838f84="" style="text-align: center;"><u data-v-6b838f84=""><a data-v-6b838f84=""
                                                                                     href="http://ditty.ir/posts/solid-liskov-substitution-principle/5ka4X"
                                                                                     target="_blank">توضیح کامل و
            اختصاصی اصل جایگزینی لیسکوف</a></u></p>
          <p data-v-6b838f84="">&nbsp;</p>
          <h3 data-v-6b838f84="">4. اصل جداسازی اینترفیس‌ها (Interface Segregation Principle)</h3>
          <p data-v-6b838f84="">کلاس‌ها نباید مجبور باشن متدهایی که به اونها احتیاجی ندارن رو پیاده‌سازی کنن.<br
            data-v-6b838f84=""> در واقع این اصل میگه که ما باید اینترفیس (Interface) ها رو جوری بنویسیم که وقتی یک کلاس
            از اون استفاده میکنه، مجبور نباشه متدهایی که لازم نداره رو پیاده‌سازی کنه.</p>
          <p data-v-6b838f84="" style="text-align: center;"><u data-v-6b838f84=""><a data-v-6b838f84=""
                                                                                     href="http://ditty.ir/posts/solid-interface-segregation-principle/XpNZ5"
                                                                                     target="_blank">توضیح کامل و
            اختصاصی اصل جداسازی اینترفیس‌ها</a></u></p>
          <p data-v-6b838f84="">&nbsp;</p>
          <h3 data-v-6b838f84="">5. اصل وارونگی وابستگی (Dependency Inversion Principle)</h3>
          <p data-v-6b838f84="">کلاس‌های سطح بالا نباید به کلاس‌های سطح پایین وابسته باشن؛ هر دو باید وابسته به انتزاع
            (Abstractions) باشن. موارد انتزاعی نباید وابسته به جزییات باشن. جزییات باید وابسته به انتزاع باشن</p>
          <p data-v-6b838f84="" style="text-align: center;"><u data-v-6b838f84=""><a data-v-6b838f84=""
                                                                                     href="http://ditty.ir/posts/solid-dependency-inversion-principle/nZAg5"
                                                                                     target="_blank">توضیح کامل و
            اختصاصی وارونگی وابستگی</a></u></p>
          <p data-v-6b838f84="">&nbsp;</p>
          <h2 data-v-6b838f84="">باید بدونیم که:</h2>
          <ul data-v-6b838f84="">
            <li data-v-6b838f84="">اکثر الگوهای طراحی (Design Patterns) که وجود دارن، تلاش میکنن اصول سالید رو
              پیاده‌سازی کنن. مخصوصا اصل اول و دوم.
            </li>
            <li data-v-6b838f84="">برنامه‌های خیلی کمی وجود دارن که همه‌ی این 5 اصل رو همزمان پیاده‌سازی کرده باشن.</li>
            <li data-v-6b838f84="">مثل دنیای واقعی، رعایت کردن همه اصول غیر ممکن هست.</li>
            <li data-v-6b838f84="">اعمال کردن هر اصل باید با چشم باز انجام بگیره. وگرنه باعث میشه مشکل پیچیده‌تر بشه.
            </li>
            <li data-v-6b838f84="">اصول سالید پای ثابت سوالات مصاحبه هست.</li>
          </ul>
          <p data-v-6b838f84="">&nbsp;</p>
          <div data-v-6b838f84="" class="promotion">
            <div data-v-6b838f84="" data-v-91c72666=""
                 class="post-style-compact position-relative promotion-container my-3">
              <div data-v-6b838f84="" data-v-91c72666="" class="row">
                <div data-v-6b838f84="">
                  <div data-v-6b838f84="">
                    <div data-v-6b838f84=""><img data-v-6b838f84="" src="/img/demo.fa31e740.jpeg" alt=""></div>
                  </div>
                </div>
                <div data-v-6b838f84="" data-v-91c72666="" class="col-md-9 col-sm-12">
                  <div data-v-6b838f84="" data-v-91c72666="" class="p-2"><p data-v-6b838f84="" data-v-91c72666=""
                                                                            class="small text-muted read-more">بیشتر
                    بدانید</p> <a data-v-6b838f84="" data-v-91c72666=""
                                  href="https://ditty.ir/posts/solid-single-responsibility-principle/Xyz0J"
                                  class="post-title"> اصول SOLID به زبان ساده - اصل اول </a>
                    <p data-v-6b838f84="" data-v-91c72666="" class="mb-0 small text-muted">Single Responsibility
                      Principle که اولین اصل از اصول SOLID هست رو امروز با هم بررسی میکنیم</p></div>
                </div>
              </div>
            </div>
          </div>
          <p data-v-6b838f84="">روزتون خوش عزیزان. امیدوارم این مقالات براتون مفید باشه 🙂🌹😉</p>
          <p data-v-6b838f84="">منابعی که برای این مقالات استفاده کردم:</p>
          <p data-v-6b838f84="" class="m-0 post-citation"><a data-v-6b838f84=""
                                                             href="https://itnext.io/solid-principles-explanation-and-examples-715b975dcad4"
                                                             target="_blank">https://itnext.io</a></p>
          <p data-v-6b838f84="" class="m-0 post-citation"><a data-v-6b838f84=""
                                                             href="https://en.wikipedia.org/wiki/SOLID" target="_blank">https://en.wikipedia.org</a>
          </p>
          <p data-v-6b838f84="" class="m-0 post-citation"><a data-v-6b838f84=""
                                                             href="https://refactoring.guru/design-patterns/book"
                                                             target="_blank">https://refactoring.guru</a></p>
          <p data-v-6b838f84="" class="m-0 post-citation"><a data-v-6b838f84=""
                                                             href="https://www.freepik.com/free-photos-vectors/background"
                                                             target="_blank">Background vector created by Harryarts -
            www.freepik.com</a></p></div>
      </div>
      <SingleArticleHorizantal v-for="n in 3" :key="n"/>

      <h4 class="mt-15">
        برچسب‌ها
      </h4>
      <v-btn v-for="n in 10" outlined style="border-color:#ededed;" class="mx-2 my-2 mt-5" rounded>
        برجسب
        {{ n }}
      </v-btn>
      <ReactionArticle class="mt-10"/>
      <div class="footerArea mt-10">
        <div class="d-flex " :class="$vuetify.breakpoint.smAndDown ? 'flex-wrap justify-space-around' : ''" >
          <div class="mt-3" :class="$vuetify.breakpoint.smAndDown ? ' d-flex justify-space-around ' : ''" style="width: 100%">
            <span class="mx-1">
              <v-icon class="mx-2">mdi-heart-outline</v-icon>
              35
            </span>
            <span class="mx-1">
              <v-icon class="mx-2">mdi-comment-outline</v-icon>
              29
            </span>
            <span class="mx-1">
              <v-icon class="mx-2">mdi-share-variant</v-icon>
            </span>
          </div>
          <v-spacer></v-spacer>
          <div class="link" :class="$vuetify.breakpoint.smAndDown ? 'mt-5' : '' ">
            <v-text-field
              outlined
              style="width: 100%;"
              dense
              append-icon="mdi-note-multiple"
              color="black"
              value="https://ali.com/s/sfsdfs"
            ></v-text-field>
          </div>
        </div>
      </div>
      <SingleArticleHorizantal class="mt-15"/>

      <div class="recommend mt-15 text-center">
        <h3 class="text-center">
          پیشنهاد ما برای شما
        </h3>
        <div class="d-flex justify-space-around mt-5">
          <div class="line brand text-center"></div>
        </div>
        <RecommendedByArticle class="mt-10"/>
      </div>
    </v-container>
  </div>
</template>

<script>
import TitleArea from "@/components/indexes/articleView/titleArea";
import AuthorInfoArticle from "@/components/indexes/articleView/authorInfoArticle";
import SingleArticleHorizantal from "@/components/main/article/single/singleArticleHorizantal";
import ReactionArticle from "@/components/main/vote/reactionArticle";
import RecommendedByArticle from "@/components/main/article/collection/horizantalList/recommendedByArticle";

export default {
  components: {RecommendedByArticle, ReactionArticle, SingleArticleHorizantal, AuthorInfoArticle, TitleArea}
}
</script>

<style scoped>
.articleContent p {
  font-size: 10pt;
  line-height: 25pt;
}

.articleContent a {
  text-decoration: none !important;
  font-weight: bolder;
  color: red;
}

.articleContent u {
  text-decoration: none !important;
  font-weight: bolder;
  color: red;
}

.articleContent ul {
  line-height: 30pt;
}

.articleContent img {
  width: 100% !important;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
