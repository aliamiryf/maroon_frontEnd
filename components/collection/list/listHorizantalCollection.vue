<template>
  <div>
    <HorizontalSingleCollection v-for="n in 10 " :key="n" class="my-5"/>
  </div>
</template>

<script>
import HorizontalSingleCollection from "@/components/collection/single/horizontalSingleCollection";
export default {
  components: {HorizontalSingleCollection}
}
</script>

<style scoped>

</style>
