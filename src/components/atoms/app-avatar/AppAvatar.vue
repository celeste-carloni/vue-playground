<template>
	<div class="avatar-container" :class="[size, shape]">
		<div class="avatar">
			<img class="avatar-image" src="./../../../assets/images/logo.png" :alt="alt"/>
<!-- 			./../../../assets/images/logo.png -->
<!-- https://github.com/vuejs-templates/pwa/issues/42 -->
		</div>
	</div>
</template>

<script src="./app-avatar.js"/>
<style src="./app-avatar.scss" lang="scss"/>