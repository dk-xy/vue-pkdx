<script setup>
import { favPokemons } from '../../transit.js';

import { useLocalstorage } from '../../composables/localstorage.js';
const prop = defineProps({
    pokemon: {
        type: Object,
        required: true
    }
});

function toggleFav(e) {
    console.log(e.target.parentElement)
    console.log(prop.pokemon)
    
    if (!prop.pokemon.isFav) {
        prop.pokemon.isFav = true
        useLocalstorage('fav-' + prop.pokemon.id, prop.pokemon)
        favPokemons.value.push(prop.pokemon)
        console.log(favPokemons)
    }
    else {
        prop.pokemon.isFav = false
        localStorage.removeItem('fav-' + prop.pokemon.id)
        let index = -1;
        favPokemons.value.forEach(pkmn => {
            index++;
            if (pkmn.id == prop.pokemon.id){
               favPokemons.value.splice(index, 1);
            } 
        });
    }
    let keys = Object.keys(localStorage);
    console.log(keys)
    keys.forEach(fav => {
        if (fav.includes('fav-')) {
            let pokemon = localStorage.getItem(fav)
        

        }
    });

}

</script>

<template>
    <button v-if="!pokemon.isFav" @click="toggleFav($event)" class="material-icons">favorite_border</button>
    <button v-if="pokemon.isFav" @click="toggleFav($event)" class="material-icons">favorite</button>
</template>

<style>
.material-icons {
    position: absolute;
    margin-top:-2px;
    margin-left: -15px;

}
</style>