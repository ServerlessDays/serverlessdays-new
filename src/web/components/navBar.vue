<template>
  <div class="w-100 w-auto-ns tc tr-ns pa3 avenir">
    <nuxt-link
      id="home"
      class="dib pv2 ph3 primaryColor pointer no-underline underline-grow"
      to="/"
    >Home</nuxt-link>
    <div class="dib" v-for="item in navBarItems" v-bind:key="item.key">
      <nuxt-link
        id="item.key"
        class="dib ph3 pv2 primaryColor pointer no-underline underline-grow"
        v-if="item.path && !item.cta"
        v-bind:to="item.path"
      >{{ item.name }}</nuxt-link>
      <nuxt-link
        id="item.key"
        class="dib ph3 pv2 mv0 fw6 contrastBkg contrastColor pointer ba b--transparent br2 no-underline underline-grow v-mid"
        v-else-if="item.path && item.cta"
        v-bind:to="item.path"
      >{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navBarItems: Array
  }
};
</script>

<style>
.underline-grow::after {
  content: "";
  display: block;
  height: 4px;
  margin-top: -1px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.7s ease;
}
.underline-grow:hover:after {
  background: yellow;
  width: 100%;
}
</style>