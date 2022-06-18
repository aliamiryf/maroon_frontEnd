<template>
  <div class="singleCollection">
    <v-row>
      <v-col cols="12" lg="4">
        <div class="picCollection">
          <img src="../../../assets/pic/demo.jpeg" width="100%" alt="">
        </div>
      </v-col>
      <v-col cols="12" lg="8">
        <div class="d-flex  fill-height justify-space-around flex-column">
          <div>
            <h4 class="titleCollection px-5 py-5">
              چه طور برنامه نویس بهتری شویم
            </h4>
          </div>
        </div>
        <div class="actions">
            <span class="ml-5">
              <span class="grey--text">25</span>
              <v-icon color="grey">mdi-note-text</v-icon>
            </span>
          <v-icon color="grey">mdi-bookmark-outline</v-icon>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.singleCollection {
  border: 1px solid #ededed;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
}

.picCollection {
  height: 150px;
  overflow: hidden;
}

.titleCollection {
  line-height: 25pt;
}

.actions {
  position: absolute;
  left: 10px;
  bottom: 10px;
}
</style>
