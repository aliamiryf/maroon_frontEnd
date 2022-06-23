<template>
  <v-app dark>
    <template v-if="error.statusCode === 404">
      <NotFound/>
    </template>
    <h1 v-else>
      {{ otherError }}
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </h1>

  </v-app>
</template>

<script>
import NotFound from "@/components/error/notFound";
export default {
  name: 'EmptyLayout',
  components: {NotFound},
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
