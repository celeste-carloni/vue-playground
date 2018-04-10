<template>
  <div>
    Buttons!!

    <app-button modifier="primary" label="click me" type="button"/>
  </div>
</template>

<script>
import AppButton from '../../atoms/app-button/AppButton';

export default {
  name: 'ButtonsPage',
  components:{
    AppButton
  },
  data () {
    return {}
  }
}
</script>