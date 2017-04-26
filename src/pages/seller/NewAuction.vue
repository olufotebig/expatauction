<template lang="html">
  <div>
    <div class="util-mb-20">
      <h3>Create new auction</h3>
      <div>
        <text-input label="Auction Name"></text-input>
      </div>
      <div>
        <text-input label="Auction Date"></text-input>
      </div>
      <div>
        <text-input label="Auction Time"></text-input>
      </div>
      <button disabled="">Create</button>
    </div>

    <div class="util-mb-20">
      <h3>Add Item</h3>
      <div>
        Add photo
      </div>
      <div>
        <text-input label="Item Name"></text-input>
      </div>
      <div>
        <text-input label="Item Minimum selling price"></text-input>
      </div>
      <div>
        <text-input label="Item Description"></text-input>
      </div>
    </div>

    <div class="util-mb-20">
      <h3>Items for Auction</h3>
      <div>
        List of items
      </div>
    </div>

    <fab :clickEvent="fabClick" symbol="+"></fab>
  </div>
</template>

<script>
import TextInput from '../../components/input/TextInput.vue'
import Fab from '../../components/Fab.vue'
export default {
  components: {TextInput, Fab},
  methods: {
    fabClick(){
      console.log('click at new auction');
    }
  }
}
</script>

<style lang="css">
</style>
