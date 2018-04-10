import CalendarEvent from './../../molecules/calendar-event/CalendarEvent';
import { store } from './../../../store/calendar.js';

export default{
	name: 'CalendarDay',
	components:{
		CalendarEvent
	},
	props: ['day'],
	methods: {
	    setActiveDay (dayId) {
	      store.setActiveDay(dayId);
		} 
	},
}