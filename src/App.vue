<template>
  <div id="app">
    <div class="app-sidebar">
          <app-nav></app-nav>
    </div>
    <div class="app-view">
      <router-view/>
    </div>
  </div>
</template>

<script>

import AppNav from './components/organisms/AppNav';

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style>
</style>
