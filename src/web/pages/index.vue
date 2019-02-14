<template>
  <div class="w-100">
    <div class="w-100" v-if="isAuthenticated === true">
      <nav-bar :nav-bar-items="allSections"/>
      <div class="w-100 mt5 pa4 tc">
        <img src="~/assets/logo.svg" />
      </div>
      <cards :cardSet="allSections"/>
    </div>
    <div v-else class="dt w-100 vh-100">
      <div class="dtc center v-mid">
        <login-modal />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';
import cards from '../components/cards.vue';
import loginModal from '../components/loginModal.vue';
import { allSections } from '../middleware/gql';

export default {
  components: { navBar, cards, loginModal },
  data() {
    return {
      allSections: [],
    };
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.state.token ? true : false;
    },
  },
  apollo: {
    allSections: {
      query: allSections,
      variables: { status: 'published' },
    },
  },
};
</script>
