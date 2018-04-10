<template lang="pug">
  .avatar-container(:class="[size, shape]")
    .avatar
      img.avatar-image(src="./../../../assets/images/logo.png" :alt="alt")
</template>
<!--      ./../../../assets/images/logo.png -->
<!-- https://github.com/vuejs-templates/pwa/issues/42 -->

<script src="./app-avatar.js"/>
<style src="./app-avatar.scss" lang="scss" scoped/>