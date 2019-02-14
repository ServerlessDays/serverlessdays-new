<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404" class="avenir">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link class="no-underline avenir" to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
};
</script>


