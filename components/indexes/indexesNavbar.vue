<template>
  <div>
    <v-container>
      <v-dialog v-model="searchDialog" fullscreen   transition="dialog-bottom-transition">
        <v-card color="white" class="fill-height">
          <div class=" fill-height d-flex justify-space-around flex-column text-center searchArea">
            <div class="closeBtn">
              <v-icon @click="searchDialog = !searchDialog">
                mdi-close
              </v-icon>
            </div>
            <div class="text-center">
              <div class="searchAreaBox">
                <v-text-field label="جست‌و‌جو" color="brand">
                  <template v-slot:append>
                   <v-btn text color="brand">
                     <v-icon>
                       mdi-magnify
                     </v-icon>
                   </v-btn>
                  </template>
                </v-text-field>
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
      <v-app-bar color="white" elevation="0" class="elevation-0" style="box-shadow: none !important;">
        <NavbarLogo :width="100" class="mt-3"/>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-list dense class="ml-10 mt-2">
            <v-list-item-group
              class="d-flex"
            >
              <v-list-item
                v-for="(item , i) in menuItems"
                :key="i"
                class="menuItem"
              >
                <v-menu class="elevation-0 red " offset-x  transition="slide-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                    >
                      <div class="d-flex">
                        {{ item.title }}
                        <v-icon v-if="item.children">
                          mdi-menu-down
                        </v-icon>
                      </div>
                    </div>
                  </template>
                  <v-list v-if="item.children" width="240" class="mainShadow elevation-0 " style="background: #fff"
                          elevation="0">
                    <v-list-item
                      v-for="(child , i ) in item.children"
                    >
                      <v-list-item-icon class="">
                        <div class="py-2 px-2 white rounded mainShadow">
                          <v-icon>{{ child.icon }}</v-icon>
                        </div>
                      </v-list-item-icon>
                      <v-list-item-title class="text-right">
                        <p class="menuItem-dropdown">
                          <span class="titleDropDown">{{ child.title }}</span>
                          <br>
                          <span class="subTitleDropDown">{{ child.title }}</span>
                        </p>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-btn text class="ml-2 " small @click="searchDialog = !searchDialog">
            <v-icon >
              mdi-magnify
            </v-icon>
          </v-btn>
          <v-btn color="red" class="white--text font-weight-bold mainShadow">
            ثبت‌نام
          </v-btn>
        </template>
        <template v-else>
          <v-app-bar-nav-icon @click="menuModel = !menuModel"/>
        </template>
      </v-app-bar>
    </v-container>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="menuModel"
      right
      app
      class="px-2 py-2"
    >
      <NavbarLogo width="100"/>
      <v-divider></v-divider>
      <v-list dense class="ml-10 mt-2">
          <v-list-item
            v-for="(item , i) in menuItems"
            :key="i"
            class="menuItem"
            active-class="menuItem"
          >
            <template v-if="!item.children" v-ripple>
              {{item.title}}
            </template>
            <v-list-group v-else style="margin-right: -12px;width: 100%" append-icon="" class="menuItem">
              <template v-slot:activator class="menuItem" >
                {{item.title}}
              </template>
              <v-list-item
                v-for="(child , i) in item.children"
                :key="i"
              >
                <v-list-item-title>
                  {{child.title}}
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-item>
          <v-list-item @click="searchDialog = !searchDialog">
            جست‌وجو
            <v-icon class="mr-2">
              mdi-magnify
            </v-icon>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import NavbarLogo from "@/components/logo/navbarLogo";

export default {
  components: {NavbarLogo},
  data() {
    return {
      menuModel: false,
      menuItems: [
        {
          title: "جدید‌ترین‌پست‌ها",
        },
        {
          title: "مناسب‌شما"
        },
        {
          title: "دسته‌بندی",
          children: [
            {
              title: "برنامه‌نویسی",
              icon: 'mdi-laptop'
            },
            {
              title: "برنامه‌نویسی",
              icon: 'mdi-laptop'
            },
            {
              title: "برنامه‌نویسی",
              icon: 'mdi-laptop'
            }
          ]
        },
        {
          title: "بخش‌آموزشات"
        },
        {
          title: "تماس‌ باما"
        },
      ],
      searchDialog:false,
    }
  }
}
</script>

<style scoped>
@media (min-width: 200px ) and (max-width: 600px) {
  .searchAreaBox{
    padding: 0px 10% 0px 10% !important;
  }
}
.menuItem:hover {
  color: #f13b3b !important;
  transition: all 0.3s;
}

.menuItem {
  transition: all 0.3s;
}

.v-menu__content {
  box-shadow: 0 15px 40px 0 rgb(0 0 0 / 20%) !important;
  margin-top: 40px;
  border-radius: 10px !important;
}

.menuItem-dropdown {
  margin-top: 16px !important;
}

.menuItem-dropdown .subTitleDropDown {
  font-size: 10px;
}
.searchAreaBox{
  padding: 0px 40% 0px 40%;
}
.searchArea{
  position: relative;
}
.closeBtn{
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
