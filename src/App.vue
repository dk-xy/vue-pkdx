<script setup>

import headerVue from './components/header.vue';
import about from'./components/about.vue';
import { onAbout, onPkdx, onFav } from './transit.js';
import InputPokedex from './components/pokedex/inputPokedex.vue';
import favs from './components/favourites/allFavs.vue';


</script>

<template>
<head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>

<!-- Header ---------------------->
<headerVue></headerVue>
<!--------------------------------->


<!-- Pokedex ---------------------->
<div v-show="onPkdx" class="pokedex">
<InputPokedex></InputPokedex>

</div>
<!--------------------------------->


<!-- Pokedex ---------------------->
<div v-if="onFav" class="favourites">
<favs></favs>

</div>
<!--------------------------------->

<!-- About ---------------------->
<about v-if="onAbout"></about>
<!--------------------------------->
</template>

<style>
body{
  width: 100%;
  margin: 0;
}

*{
  font-family: Arial;
}

* a{
  color:rgb(202, 51, 51)
}

* a:visited{
  color:rgb(255, 0, 0)
}
</style>
