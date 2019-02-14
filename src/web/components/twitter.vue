<template>
    <a class="no-underline pl3 pv3 f6" v-bind:href="twitter" target="_blank">
      <img class="v-mid" src="~/assets/svg/twitter.svg" height="45" alt="Twitter">
    </a>
</template>
<script>
export default {
  props: {
    twitter: String,
  },
};
</script>
