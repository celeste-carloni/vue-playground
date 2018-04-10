<template>
	<div class="calendar-week">
		<calendar-day
			v-for="day in sharedState.seedData" 
			:key="day.id"
			:day="day"
		/>
	</div>
</template>

<script src="./calendar-week.js"/>
<style lang="scss" src="./calendar-week.scss" scoped/>