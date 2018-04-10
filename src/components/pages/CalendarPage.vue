<template>
  <div class="calendar-page grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell">
        <calendar-week/>
      </div>
      <div class="cell">
        <div class="grid-x align-center">
          <div class="cell shrink">
            <calendar-entry/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppModal from '../molecules/app-modal/AppModal';
import CalendarWeek from '../organisms/calendar-week/CalendarWeek';
import CalendarEntry from '../molecules/calendar-entry/CalendarEntry';

export default {
  name: 'CalendarPage',
  data () {
    return {
    }
  },
  components:{
    AppModal,
    CalendarWeek,
    CalendarEntry
  }
}
</script>