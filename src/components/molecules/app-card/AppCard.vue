<template>
	<article class="card">
		<div class="card-media">
        	<app-avatar size="large" alt="image 1"> </app-avatar>
	    </div>
	    <div class="card-content">
	    	<h4> {{item.title}} </h4>
	    	<p> {{item.description}} </p>
	    	<div class="author"> 
	    		<small> Submitted by </small>
	        	<app-avatar shape="rounded" size="small" alt="image 2"> </app-avatar>
	        </div>
	    </div>
	</article>
</template>

<script src="./app-card.js"/>
<style src="./app-card.scss" lang="scss" scoped/>