<template lang="html">
  <div>
    <p>KitchenSink</p>
    <ul>
      <li><router-link :to="{name: 'newAuction'}">New Auction</router-link></li>
      <li><router-link :to="{name: 'auctionSearch'}">Auction Search</router-link></li>
      <li><router-link :to="{name: 'auction', params:{auctionId:1}}">Auction </router-link></li>
      <li><router-link :to="{name: 'liveBid'}">Live Bid</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
