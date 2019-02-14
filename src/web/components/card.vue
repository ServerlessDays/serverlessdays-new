<template>
    <div class="w5 h5 ba br3 b--transparent avenir">
        <div v-if="card.section">
        <nuxt-link class="no-underline pointer" v-bind:to="card.section.path + card.path">
            <h3 class="f3 fw6 ph3 pt3 pb1 ma0 black">{{ card.name }}</h3>
            <p class="f5 pa3 ma0 fw4 gray"> {{ card.description }} </p>
            <img v-if="card.img" v-bind:src="card.img">
        </nuxt-link>
        </div>
        <div v-else-if="card.path">
          <nuxt-link class="no-underline pointer" v-bind:to="card.path">
            <h3 class="f3 fw6 ph3 pt3 pb1 ma0 black">{{ card.name }}</h3>
            <p class="f5 pa3 ma0 fw4 gray"> {{ card.description }} </p>
            <img v-if="card.img" v-bind:src="card.img">
          </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    card: Object,
  },
};
</script>
<style>
h3::after {
  content: '';
  display: block;
  height: 4px;
  margin-top: -1px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.7s ease;
}
h3:hover:after {
  background: #7777ff;
  width: 100%;
}
</style>
