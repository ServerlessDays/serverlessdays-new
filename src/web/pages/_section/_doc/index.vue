<template>
    <div class="w-100">
      <nav-bar :nav-bar-items="allSections"/>
      <div class="mt2 mt5-ns center mw7">
        <md-content v-if="documentByPath" :source="documentByPath.markdown"/> 
      </div>
    </div>
</template>

<script>
import navBar from '../../../components/navBar.vue';
import mdContent from '../../../components/mdContent.vue';
// import gql from 'graphql-tag';
import { allSections, documentByPath } from '../../../middleware/gql';

export default {
  components: { navBar, mdContent },
  data() {
    return {
      documentByPath: {},
      documentPath: this.$route.params.doc,
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
    documentByPath: {
      query: documentByPath,
      variables() {
        return {
          path: this.documentPath,
        };
      },
    },
  },
};
</script>

