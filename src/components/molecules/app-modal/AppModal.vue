<template lang="pug">
  .app-modal
    button(@click="toggleShow") {{show}}
    div  
      app-button(
        modifier="primary" 
        label="trigger modal" 
        type="button" 
        :method="toggleShow"
      )
    .modal(v-if="show") This is a modal
</template>
<script src="./app-modal.js"/>
<style lang="scss" src="./app-modal.scss" scoped/>