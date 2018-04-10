<template lang="pug">
	.calendar-week
		calendar-day(
			v-for="day in sharedState.seedData" 
			:key="day.id"
			:day="day"
		)
</template>

<script src="./calendar-week.js"/>
<style lang="scss" src="./calendar-week.scss" scoped/>