import AppButton from './../../atoms/app-button/AppButton';
import { store } from './../../../store/calendar.js';

export default{
    name: 'CalendarEvent',
    components:{
      AppButton
    },
    data () {
      return {
        newEventDetails: ''
      }
    },
    props: ['event', 'day'],
    methods:{
      editEvent (dayId, eventDetails, handler) {
          store.editEvent(dayId, eventDetails);
      },
      updateEvent (dayId, originalEventDetails, updatedEventDetails, handler) {
        if (updatedEventDetails === '') updatedEventDetails = originalEventDetails;
        store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
        this.newEventDetails = '';
      },
      deleteEvent (dayId, eventDetails, handler) {
        store.deleteEvent(dayId, eventDetails);
      },
      remove(){
          console.log('remove');
      }
    }
}