<template>
    <div class="w-100">
      <nav-bar :nav-bar-items="allSections"/>
      <div class="mt2 mt5-ns center mw7">
        <h1 class="avenir f1 fw1"> {{ documentListBySection.name }} </h1>
        <p class="avenir f5 i"> {{ documentListBySection.description }} </p>
      </div>
      <cards :cardSet="documentListBySection.document"/>
    </div>

</template>
<script>
import navBar from '../../components/navBar.vue';
import cards from '../../components/cards.vue';
import { allSections, documentListBySection } from '../../middleware/gql';
// import gql from 'graphql-tag';

export default {
  components: { navBar, cards },
  data() {
    return {
      documentListBySection: {},
      sectionPath: this.$route.fullPath,
    };
  },
  mounted: function() {
    const token = localStorage.getItem('id_token');
    if (token) {
      this.$store.state.token = token;
    } else {
      this.$store.state.token = null;
      this.$router.push('/');
    }
  },
  apollo: {
    allSections: {
      query: allSections,
      variables: { status: 'published' },
    },
    documentListBySection: {
      query: documentListBySection,
      variables() {
        return {
          status: 'published',
          section: this.sectionPath,
        };
      },
    },
  },
};
</script>

