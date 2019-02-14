<template>
    <a class="no-underline pl3 pv3 f6" v-bind:href="linkedin" target="_blank">
      <img class="v-mid" src="~/assets/svg/linkedin.svg" height="35" alt="LinkedIn">
    </a>
</template>
<script>
export default {
  props: {
    linkedin: String,
  },
};
</script>