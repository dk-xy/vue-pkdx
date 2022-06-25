<script setup>
import { ref, computed } from 'vue';
import OnePokemon from '../pokedex/onePokemon.vue';

import { favPokemons } from '../../transit.js';
let keys = Object.keys(localStorage);
console.log(keys)
let tempArray = [];
keys.forEach(fav => {
    if (fav.includes('fav-')) {
        let thePokemon = localStorage.getItem(fav)
        console.log (JSON.parse(thePokemon))
        tempArray.push(JSON.parse(thePokemon))
    }

});
favPokemons.value = tempArray
console.log(favPokemons)


</script>

<template>
    <div class="inputSection">
        <span class="favTitle">Favorites</span>
        <button class="gen one">Reset</button>
    </div>

    <div class="allPokemons">
        <div class="pokemon" v-for="pokemon in favPokemons">
            <OnePokemon :pokemon="pokemon"></OnePokemon>
        </div>
    </div>
</template>

<style>
.favTitle{
    font-size: 24px;
    color: white;
    font-weight: 800;
}
</style>