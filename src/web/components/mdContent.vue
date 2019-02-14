<template>
  <div class="measure-narrow measure-m mw7-l center markdown-body" v-html="renderedHTML">
  </div>
</template>
<script>
import md from '../middleware/markdown';

export default {
  props: {
    source: String,
  },
  computed: {
    renderedHTML() {
      return md(this.source);
    },
  },
};
</script>

<style>
@import '../assets/css/markdown-modest.css';
@import '../assets/css/markdown-prism.css';
</style>