<template>
    <div class="flex-ns pt5-ns w-100">
        <div class="w-auto w-10-l dn db-l tr">
        </div>
        <div class="w-100 w-40-ns tr">
          <img class="v-top cover" v-bind:src="eventDetails.logo" style="margin-right: -90px">
          <h1 class="avenir mt0 tr f3" style="margin-right: -75px">{{ eventDetails.name }}</h1>
          <div class="avenir fw4 f4 pt0 pl3 pl0-ns tr" style="margin-right: -75px">
            <p>{{eventDetails.startDate}} to {{eventDetails.endDate}}</p>
            <div class="contrastBkg contrastColor pa3 measure tl f5">
              <span class="fw7">Milestones</span>
              <div class="mt3">
                <div v-for="item in eventDetails.milestones" v-bind:key="item.id">
                    <p class="mt1 mb0 pv1">{{ item.date }}: <span class="fw7">{{ item.description }}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-auto w-50-ns tl v-top cover pr3">
          <img src="london_large.jpg" class="heroImage">
        </div>
    </div>
</template>

<script>
export default {
  props: {
    eventDetails: Object
  }
};
</script>

<style>
    .heroImage {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }



</style>

       