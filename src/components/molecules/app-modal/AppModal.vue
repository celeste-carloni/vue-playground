<template>
  <div>
    <button @click="toggleShow"> {{show}}</button>
    <div>    
      <app-button modifier="primary" label="trigger modal" type="button" :method="toggleShow"/>
    </div>
    <div v-if="show" class="modal">
      This is a modal
    </div>
  </div>
</template>
<script src="./app-modal.js"/>
<style lang="scss" src="./app-modal.scss" scoped/>