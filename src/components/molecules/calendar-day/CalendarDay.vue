<template lang="pug">
  .calendar-day(@click="setActiveDay(day.id)")
    .calendar-day-label {{ day.abbvTitle }}
    .calendar-day-details
      .calendar-day-number {{ day.id }}
      calendar-event( v-for="event in day.events"
        :key="day.events.indexOf(event)"
        :event="event"
        :day="day"
      )
</template>
<script src="./calendar-day.js"/>
<style lang="scss" src="./calendar-day.scss" scoped/>