import Vue from 'vue';
import { seedData } from '../data/calendar.js';

export const store = { 
  state: { 
    seedData 
  },
  getActiveDay () {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay (dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
    }); 
  },
  submitEvent (eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ "details": eventDetails, "edit": false });
  },
  editEvent (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(
          day => day.id === dayId
    );
    const eventObj = dayObj.events.find( 
      event => event.details === eventDetails
    );
    eventObj.edit = true; 
  },
  updateEvent (dayId, originalEventDetails, newEventDetails) {
      // Find the day object
    const dayObj = this.state.seedData.find( 
      day => day.id === dayId
    );
    // Find the specific event
    const eventObj = dayObj.events.find(
      event => event.details === originalEventDetails
    );
    // Set the event details to the new details // and turn off editing
    eventObj.details = newEventDetails; eventObj.edit = false;
  },
  deleteEvent (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(
      day => day.id === dayId
    );
    const eventIndexToRemove = dayObj.events.findIndex(
      event => event.details === eventDetails
    );
    dayObj.events.splice(eventIndexToRemove, 1);
  },
  getEventObj (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(
      day => day.id === dayId
    );
    return dayObj.events.find(
      event => event.details === eventDetails
    );
  }
}