<template>
    <a class="no-underline pl3 pv3 f6" v-bind:href="medium" target="_blank">
      <img class="v-mid" src="~/assets/svg/medium.svg" height="35" alt="Medium">
    </a>
</template>
<script>
export default {
  props: {
    medium: String,
  },
};
</script>