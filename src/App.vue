<script setup>

import headerVue from './components/header.vue';
import about from'./components/about.vue';
import { onAbout, onPkdx } from './transit.js';
import InputPokedex from './components/pokedex/inputPokedex.vue';

</script>

<template>
<!-- Header ---------------------->
<headerVue></headerVue>
<!--------------------------------->


<!-- Pokedex ---------------------->
<div v-if="onPkdx" class="pokedex">
<InputPokedex></InputPokedex>
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
