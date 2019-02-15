<template>
  <div class="w-100"></div>
</template>

<script>
import navBar from "../components/navBar.vue";
import cards from "../components/cards.vue";
import { allSections } from "../middleware/gql";

export default {
  components: { navBar, cards },
  data() {
    return {
      allSections: []
    };
  },
  computed: {
    navigation: function() {
      return this.$store.state.nav;
    }
  },
  apollo: {
    allSections: {
      query: allSections,
      variables: { status: "published" }
    }
  }
};
</script>
