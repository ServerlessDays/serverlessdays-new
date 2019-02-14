<template>
    <div class="w-100 avenir">
        <h1 class="avenir ph3 pt3 pb1 ma0" type="text">{{ user.name }}</h1>
        <p class="pv2 ph3 ma0">{{ user.email }}</p>
        <p class="pv2 ph3 ma0">{{ user.phone }}</p>
        <twitter :twitter="user.twitter"/>
        <medium :twitter="user.medium"/>
        <linkedin :twitter="user.linkedin"/>
    </div>
</template>
<script>
import twitter from './twitter.vue';
import medium from './medium.vue';
import linkedin from './linkedin.vue';
export default {
  components: { twitter, linkedin, medium },
  props: {
    user: Object,
  },
};
</script>

