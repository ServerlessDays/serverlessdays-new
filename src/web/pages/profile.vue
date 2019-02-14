<template>
    <div class="w-100">
        <navBar />
        <div class="w-100 w-80-m w-60-l center">
            <div class="dt">
                <div class="dt-row-ns"> 
                    <div class="dtc ">
                        <contact :user="user"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '../components/navBar.vue';
import contact from '../components/contact.vue';

export default {
  components: { navBar, contact },
  data() {
    return {
      user: {
        name: 'Bob Smith',
        email: 'bob@smith.com',
        phone: '+44 77 598 0987',
        twitter: 'https://twitter.com/bobsmith',
        medium: 'https://medium.com/bobsmith',
      },
    };
  },
};
</script>

