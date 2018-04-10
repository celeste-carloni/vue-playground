<template>
  <div class="calendar-entry">
    <div class="calendar-entry-note">
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <input type="text" placeholder="New Event" v-model="inputEntry" required />
      <app-button
        modifier="primary"
        type="button"
        label="Submit"
        :method="submitEvent.bind(null,inputEntry)"
      />
    </div>
    <p class="error" v-if="error">
      You must type something first!
    </p>
  </div>
</template>

<script src="./calendar-entry.js"/>
<style lang="scss" src="./calendar-entry.scss" scoped/>
