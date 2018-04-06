<template>
  <app-button label="click me" type="button" class="btn"> </app-button>
</template>

<script>
import AppButton from '../atoms/app-button/AppButton';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    AppButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
