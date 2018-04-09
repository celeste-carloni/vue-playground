<template>
    <div class="col-6">
      <app-modal/>
    </div>
</template>

<script>
import AppModal from '../molecules/app-modal/AppModal';

export default {
  name: 'TestingPage',
  data () {
    return {
    }
  },
  components:{
    AppModal
  }
}
</script>