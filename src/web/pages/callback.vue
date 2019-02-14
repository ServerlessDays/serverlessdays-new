<template>
    <div class="w-100 vh-100 dt">
        <div class="dtc v-mid tc">
            <span class="f3 gray code">{{ action }}</span>
        </div>
    </div>
</template>

<script>
import { login } from '../middleware/auth.js';

export default {
  data() {
    return {
      action: 'Logging you in ...',
    };
  },
  mounted: function() {
    //console.log(`Hash: ${location.hash}`);
    // console.log(`Route Object: ${JSON.stringify(this.$route.path)}`);
    //console.log(`Nuxt Route Hash: ${this.$route.hash}`);
    if (this.$route.hash) {
      const returnHash = this.$route.hash.substr(1);
      const token = login(returnHash);
      if (token) {
        this.$store.state.token = token;
        this.action = 'Successful Login. Redirecting ...';
        this.$router.push('/');
      } else {
        this.action = 'Failed login. Redirecting ...';
      }
    } else {
      this.action = 'No access token provided. Unable to log you in.';
      this.$router.push('/');
    }
  },
};
</script>
