<template lang="pug">
  .testing-page
    .large-6
      svgicon(
        name="calendar" 
        width="200" 
        height="200" 
        :fill="false"
      )

    .large-6
      app-pagination
</template>
<!--     <app-modal/> -->

<script>
import './../../icons/calendar';
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