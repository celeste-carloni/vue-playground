<template lang="pug">
	button(
		class="app-button button" 
		:class="modifier" 
		:type="type" 
		@click="method"
	) {{label}} 
</template>

<script src="./app-button.js"/>
<style src="./app-button.scss" lang="scss" scoped/>