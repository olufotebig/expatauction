<template lang="html">
  <span @click="clickEvent" class="fab">
    <div class="fab-icon">{{symbol}}</div>
  </span>
</template>

<script>
export default {
  props: ['clickEvent','symbol']
}
</script>

<style lang="scss">
.fab{
  position: absolute;
  bottom: 0;
  right: 0;
  background: #d81b60;
  color: #fff;
  height: 56px;
  width: 56px;
  border-radius: 28px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 16px 16px 0;
  cursor: pointer;

  .fab-icon {
    display: flex;
    flex: 1 1 100%;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
}
</style>
