<template lang="html">
  <div>
    <h3>Auction Search</h3>
    <div class="util-mb-20">
      Search Filters
    </div>
    <div>
      Search Results
    </div>

    <fab :clickEvent="fabClick" symbol="+"></fab>
  </div>
</template>

<script>
import Fab from '../components/Fab.vue'
export default {
  components: {
    Fab
  },
  methods: {
    fabClick(){
      console.log('click auction search');
    }
  }
}
</script>

<style lang="css">
</style>
