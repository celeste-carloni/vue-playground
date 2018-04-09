<template>
	<button class="app-button button" :class="modifier" :type="type" @click="method"> {{label}} </button>
</template>

<script src="./app-button.js"/>
<style src="./app-button.scss" lang="scss" scoped/>