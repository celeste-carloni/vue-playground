<template>
  <div class="app-nav">
    <ul class="nav">
      <li class="nav-item" v-for="link in links" :key="link.label">
        <span class="nav-item-label"> {{link.label}} </span>
        <ul class="nav-item-list" >
          <li v-for="sublink in link.sublinks" :key="sublink.label">
            <AppLink
              :label="sublink.label"
              :path="sublink.path"
              :isInheritColor="true"
            />
          </li>
        </ul>
        </li>
    </ul>
    <AppLink
      :label="'Testing component'"
      :path= "'/testing'"
      :isInheritColor="true"
    />
  </div>
  
</template>

<script src="./app-nav.js"/>
<style src="./app-nav.scss" lang="scss" scoped/>