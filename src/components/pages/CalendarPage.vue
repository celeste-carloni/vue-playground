<template>
    <div class="calendar-page">
        <calendar-week/>
      <div id="calendar-entry">
        <!-- Markup for calendar entry -->
      </div> 
    </div>
</template>

<script>
import AppModal from '../molecules/app-modal/AppModal';
import CalendarWeek from '../organisms/calendar-week/CalendarWeek';

export default {
  name: 'CalendarPage',
  data () {
    return {
    }
  },
  components:{
    AppModal,
    CalendarWeek
  }
}
</script>