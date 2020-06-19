<template>
  
  <div>
    <app-header/>
    <div class="app">
       <nuxt/>
    </div>
    <app-footer/>
   
  </div>
</template>
<script>


import AppHeader from '~/components/common/AppHeader.vue'
import AppFooter from '~/components/common/AppFooter.vue'

export default {
  components: {
    AppHeader,AppFooter
  },
  
};

</script>
<style>

</style>
