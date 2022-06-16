<template>
  <div>
    <div class="backgroundPic"></div>
    <div class="authorInfo">
      <div class="authorVector">
        <v-avatar size="100" class="avatar">
          <img src="../../../assets/pic/demo.jpeg" alt="">
        </v-avatar>
      </div>
      <div class="justify-space-between" :class="$vuetify.breakpoint.mdAndUp ? 'd-flex' : ''">
        <div>
          <h3 class="bold-font mt-2">
            علی امیری
          </h3>
          <span class="grey--text" style="font-size: 10px">
            تاریخ‌عضویت :
            ۱۴۰۰/۰۳/۰۴
          </span>
        </div>
        <div class="mt-5">
          <v-btn color="red" outlined small>
            <h4>
              26 دنبال کننده
            </h4>
          </v-btn>
          <v-btn color="red" small class="white--text" elevation="0">
            <v-icon small>mdi-bell</v-icon>
          </v-btn>
        </div>
      </div>

      <v-tabs v-model="tabs" color="brand" class="mt-5">
        <v-tabs-slider color="brand"></v-tabs-slider>
        <v-tab v-for="(item , i ) in headers">
          <p class="font-weight-bold">
            {{ item.title }}
          </p>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
            مقالات
        </v-tab-item>
        <v-tab-item>
          لیست
        </v-tab-item>
        <v-tab-item>
          درباره ما
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          title: 'مقالات'
        },
        {
          title: 'لیست‌ها'
        },
        {
          title: 'درباره‌نویسنده'
        },
      ],
      tabs: null
    }
  }
}
</script>

<style scoped>
.backgroundPic {
  height: 150px;
  background: url("../../../assets/pic/demo.jpeg");
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0px 0px;
}

.authorVector {
  margin-top: -50px;
  margin-right: 20px;
}

.authorVector .avatar {
  border: 5px solid #ffffff;
}
</style>
