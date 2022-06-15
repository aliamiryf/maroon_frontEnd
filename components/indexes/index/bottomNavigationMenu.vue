<template>
  <div>
    <v-bottom-navigation app fixed height="100" background-color="transparent" class="elevation-0" v-if="$vuetify.breakpoint.smAndDown">
      <div class="mobileMenu px-10 py-3 mainShadow">
        <div class="d-flex justify-space-between  align-center fill-height">
          <div>
            <v-icon size="30">mdi-account-outline</v-icon>
          </div>
          <div>
            <v-icon size="30" color="brand">mdi-home-outline</v-icon>
          </div>
          <div>
            <v-icon size="30">mdi-bookmark-outline</v-icon>
          </div>
          <div>
            <v-icon size="30">mdi-information-outline</v-icon>
          </div>
        </div>
      </div>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobileMenu{
  background-color: white;
  width: 75%;
  margin-bottom: 30px;
  border-radius: 20px;
}
</style>
