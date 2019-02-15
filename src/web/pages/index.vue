<template>
  <div class="w-100 vh-100">
    <nav-bar class="mr3-l pt3-l" :nav-bar-items="navigation"/>
    <img class="pl6-l pl3-m pa1" v-bind:src="getEvent.logo">
    <div class="w-90-l mt5 pa4 tl"></div>
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import cards from "../components/cards.vue";
import { getEvent } from "../middleware/gql";

export default {
  components: { navBar, cards },
  data() {
    return {
      getEvent: []
    };
  },
  computed: {
    navigation: function() {
      return this.$store.state.nav;
    }
  },
  apollo: {
    getEvent: {
      query: getEvent,
      variables: { id: "9314093u43r" }
    }
  }
};
</script>
