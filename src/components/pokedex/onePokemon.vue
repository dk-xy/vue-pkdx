<script setup>
import { ref, computed } from 'vue';

let getImgLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const prop = defineProps({
    pokemon: {
        type: Object,
        required: false
    }
    });
let pokemonLink = `https://pokeapi.co/api/v2/pokemon/${prop.pokemon.name}`
let pokemonData = ref({})




</script>

<template>
    <div id="pokemon" :class = "[pokemon.name]" >
        <img :src="[pokemon.image]"  :class = "[pokemon.name]">
        <div class="pokemon-name"> {{ pokemon.name }}</div>
       
    </div>
</template>

<style>


</style>