<template>
  <div>
    Home
    <fab :clickEvent="fabClick" symbol="+"></fab>
  </div>
</template>

<script>
import Fab from '../components/Fab.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    fabClick(){
      console.log('fab at home');
    }
  },
  components: {
    Fab
  }
}
</script>

<style lang="scss">

</style>
