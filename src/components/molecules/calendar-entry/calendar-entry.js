import AppButton from './../../atoms/app-button/AppButton';
import { store } from './../../../store/calendar.js';

export default {
  name: 'CalendarEntry',
  components:{
    AppButton
  },
  data () {
    return {
      inputEntry: '',
      error: false
    }
  },
  computed: {
    titleOfActiveDay () {
      return store.getActiveDay().fullTitle;
    }
  },
  methods: {
    submitEvent (eventDetails, handler) {
      if (eventDetails === '') return this.error = true;

      store.submitEvent(eventDetails);
      this.inputEntry = '';
      this.error = false;
    }
  }
}