<template>
  <div id="app">
    <div class="app-view">
      <div class="app-sidebar">
            <img src="./assets/images/logo.png">
            <app-nav :links="links"/>
      </div>
      <div class="app-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import AppNav from './components/organisms/app-nav/AppNav';

export default {
  name: 'App',
  components: {
    AppNav
  },
  data(){
    return{
      links: [
        {
          path: '/atoms',
          label: 'Atoms',
          sublinks: [
            {
              path: '/avatar',
              label: 'Avatar'
            },
            {
              path: '/buttons',
              label: 'Buttons'
            },
            {
              path: '/links',
              label: 'Links'
            }
          ]
        },
        {
          path: '/molecules',
          label: 'Molecules',
          sublinks: [
          ]
        },
        {
          path: '/organisms',
          label: 'Organisms',
          sublinks: [
            {
              path: '/organisms',
              label: 'CardList',
            }
          ]          
        }
      ]
    }
  }
}
</script>

<style src="./assets/styles/main.scss" lang="scss"></style>
