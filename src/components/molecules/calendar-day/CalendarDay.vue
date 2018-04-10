<template>
  <div class="calendar-day" @click="setActiveDay(day.id)">
    <div class="calendar-day-label">{{ day.abbvTitle }}</div>
    <div class="calendar-day-details">
      <div class="calendar-day-number">{{ day.id }}</div>
      <calendar-event v-for="event in day.events"
        :key="day.events.indexOf(event)"
        :event="event"
        :day="day"/>
    </div>
  </div>
</template>
<script src="./calendar-day.js"/>
<style lang="scss" src="./calendar-day.scss" scoped/>