<template lang="html">
  <div>
    LiveBid
    <div class="util-mb-20">
      No live bids at the moment.
      Your next participating auction is in XX hours.
    </div>
    <div>
      <p>
        Auction Item details
      </p>
      <text-input label="Bid Value"></text-input>
      <button>Bid</button>
    </div>
  </div>
</template>

<script>
import TextInput from '../components/input/TextInput.vue'
export default {
  components:{
    TextInput
  }
}
</script>

<style lang="css">
</style>
