<template>
  <div class="w-100 w-auto-ns absolute right-1 pa0 ma0">
    <ul id="dropdown-menu" 
        class="list w4 mv1 pr2 ba br0 b--light-gray bg-near-white"
    >
        <li class="f5 avenir pv3 ph2" v-for="item in menuItems" v-bind:key="item.key"> 
            <a class="fw4 no-underline pointer dark-gray" v-if="item.link" v-bind:href="item.key">{{ item.name }}</a>
            <button class="fw4 avenir no-underline pointer dark-grey bn bg-transparent pa0 ma0" v-else-if="!item.link" @click="item.action">{{ item.name }}</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: Array,
  },
};
</script>

