<template>
    <div
      class="db tc pt2 pt4-ns"
      v-if="cardSet && cardSet.length"
    >
      <div
        class="dib ph4 tl v-top"
        v-for="card in cardSet"
        v-bind:key="card.key"
      >
        <card :card="card"/>
      </div>
    </div>
</template>
<script>
import card from './card.vue';

export default {
  components: { card },
  props: {
    cardSet: Array,
  },
};
</script>