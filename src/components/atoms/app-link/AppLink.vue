<template lang="pug">
  router-link( 
  	class="app-link" 
  	:class="isInheritColor ? 'color-inherit' : ''" 
  	:to="path"
  ) {{ label }}

</template>

<script src="./app-link.js"/>
<style src="./app-link.scss" lang="scss" scoped/>