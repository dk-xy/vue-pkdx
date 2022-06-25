<script setup>
import { ref, computed } from 'vue';
import favButton from './favButton.vue';
import FavButton from './favButton.vue';

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
    <FavButton :pokemon="pokemon"></FavButton>
        <img :src="[pokemon.image]"  :class = "[pokemon.name]">
        <div class="pokemon-name"> {{ pokemon.name }}</div>
       
    </div>
</template>

<style>

#pokemon{
    background-color: rgb(199, 199, 199);
    padding: 10px 20px 10px 20px;
    border-radius: 5%;
}

</style>