<template>
  <div class="">
    <v-app class="">
      <Nuxt/>
    </v-app>
  </div>
</template>

<script>
import Router from "vue-router";
import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const router = new Router({
  mode: 'history',
});

Sentry.init({
  Vue,
  dsn: "https://9f7782bf1dd44ed4ab95582095c629e5@o1297915.ingest.sentry.io/6527465",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
});

export default {

}
</script>

<style scoped>

</style>
