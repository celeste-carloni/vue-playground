<template>
  <nav class="app-pagination theme-dark" aria-label="Pagination">
    <ul class="pagination">
      <li class="pagination-previous disabled">
        Previous 
        <span class="show-for-sr">page</span>
      </li>
      <li class="current">
        <span class="show-for-sr">You're on page</span> 1
      </li>
      <li>
        <a href="#" aria-label="Page 2">2</a>
      </li>
      <li><a href="#" aria-label="Page 3">3</a></li>
      <li><a href="#" aria-label="Page 4">4</a></li>
      <li class="pagination-next">
        <a href="#" aria-label="Next page">
          Next 
          <span class="show-for-sr">page</span>
        </a>
      </li>
  </ul>
</nav> 
</template>

<script src="./app-pagination.js"/>
<style lang="scss" src="./app-pagination.scss" scoped/>