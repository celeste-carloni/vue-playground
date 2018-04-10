import CalendarDay from './../../molecules/calendar-day/CalendarDay';
import { store } from './../../../store/calendar.js';

export default{
  name: 'CalendarWeek',
  components:{
    CalendarDay
  },
  data(){
    return{
      sharedState: store.state
    }
  }
}