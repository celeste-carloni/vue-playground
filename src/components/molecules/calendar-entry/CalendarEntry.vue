<template lang="pug">
  .calendar-entry
    .calendar-entry-note
      p.calendar-entry-day
        |Day of event: 
        span {{ titleOfActiveDay }}
      input(
        type="text" 
        placeholder="New Event" 
        v-model="inputEntry" 
        required
      ) 
      app-button(
        modifier="primary"
        type="button"
        label="Submit"
        :method="submitEvent.bind(null,inputEntry)"
      )

    p.error(v-if="error") You must type something first!
</template>

<script src="./calendar-entry.js"/>
<style lang="scss" src="./calendar-entry.scss" scoped/>
