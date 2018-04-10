<template lang="pug">
  .app-nav
    ul.nav
      li.nav-item(v-for="link in links" :key="link.label")
        span.nav-item-label {{link.label}}
        ul.nav-item-list
          li(v-for="sublink in link.sublinks" :key="sublink.label")
            AppLink(
              :label="sublink.label"
              :path="sublink.path"
              :isInheritColor="true"
            )

    AppLink(
      :label="'Testing component'"
      :path= "'/testing'"
      :isInheritColor="true"
    )
  </div>
  
</template>

<script src="./app-nav.js"/>
<style src="./app-nav.scss" lang="scss" scoped/>