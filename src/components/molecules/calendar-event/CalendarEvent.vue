<template>
  <div class="calendar-event">
    <div v-if="!event.edit">
      <div class="calendar-event-task">
        {{ event.details }}
      </div>
      <div class="calendar-event-actions">
        <app-button
          modifier="is-icon"
          type="button"
          :method="editEvent.bind(null, day.id, event.details)"
        />
        <app-button
          modifier="is-icon"
          type="button"
          :method="deleteEvent.bind(null, day.id, event.details)"
        />
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="newEventDetails"/> 
      <app-button
          modifier="is-icon"
          type="button"
          :method="updateEvent.bind(null, day.id, event.details, newEventDetails)"
        />
    </div>
  </div>
</template>
<script src="./calendar-event.js"/>
<style lang="scss" src="./calendar-event.scss" scoped/>