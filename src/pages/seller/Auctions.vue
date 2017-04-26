<template lang="html">
  <div>
    Seller Auctions

    <fab :clickEvent="toAuctionPath" symbol="+"></fab>
  </div>
</template>

<script>
import Fab from '../../components/Fab.vue'
export default {
  data(){
    return {
      newAuctionPath :{name: 'newAuction'}
    }
  },
  methods: {
    toAuctionPath(){
      this.$router.push(this.newAuctionPath);
    }
  },
  components: {
    Fab
  }
}
</script>

<style lang="css">
</style>
