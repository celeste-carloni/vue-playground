<template>
    <div class="testing-page">
      <div class="large-6">
        <app-modal/>
      </div>
      <div class="large-6">
        <app-pagination/>
      </div>
  </div>
</template>

<script>
import AppModal from '../molecules/app-modal/AppModal';
import AppPagination from '../molecules/app-pagination/AppPagination';


export default {
  name: 'TestingPage',
  data () {
    return {
    }
  },
  components:{
    AppModal,
    AppPagination
  }
}
</script>