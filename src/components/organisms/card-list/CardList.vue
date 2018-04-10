<template lang="pug">
  .card-list
    ul
      li( v-for="item in items" :key="item.id" )
          AppCard(:item="item")
</template>

<script src="./card-list.js"/>
<style src="./card-list.scss" lang="scss" scoped/>