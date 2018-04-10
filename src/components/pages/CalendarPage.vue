<template lang="pug">
  .calendar-page.grid-container
    .grid-x.grid-margin-x
      .cell
        calendar-week
      .cell
    .grid-x.align-center
      .cell.shrink
        calendar-entry
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