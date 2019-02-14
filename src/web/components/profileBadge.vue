<template>
    <div class="w-auto-ns w5">
        <button class="w4 w3 pa2 ba br1 b--light-gray f5 avenir pointer"
        @click="dropIt"
        >
            {{ dispName }}
        </button>
        <dropdown class="db tr" v-if="isDropped" :menuItems="menuItems"/>
    </div>
</template>

<script>
import dropdown from './dropdown.vue';
import { logout } from '../middleware/auth.js';

export default {
  components: { dropdown },
  props: {
    dispName: String,
  },
  data: () => {
    return {
      isDropped: false,
      menuItems: [
        { name: 'Profile', key: '/profile', link: true },
        { name: 'Log Out', key: '/logout', link: false, action: logout },
      ],
    };
  },
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped;
    },
  },
};
</script>

