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
  </div>
</template>

<script>
import TextInput from '../components/input/TextInput.vue'
export default {
  components: {TextInput}
}
</script>

<style lang="css">
</style>
