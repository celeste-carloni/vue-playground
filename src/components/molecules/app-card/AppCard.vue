<template lang="pug">
  article.card
    .card-media
          app-avatar(
            size="large" 
            alt="image 1"
          )
    .card-content
        h4 {{item.title}}
        p {{item.description}}
        .author
          small Submitted by
            app-avatar(
              shape="rounded" 
              size="small" 
              alt="image 2"
            )
</template>

<script src="./app-card.js"/>
<style src="./app-card.scss" lang="scss" scoped/>