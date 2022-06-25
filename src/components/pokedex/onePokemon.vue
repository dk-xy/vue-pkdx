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

fetch(pokemonLink)
.then(resp => resp.json())
        .then(pkmn => {
            pokemonData.value = pkmn;
            var pic = document.createElement("img");
            pic.classList.add(prop.pokemon.name)
            document.querySelector("."+prop.pokemon.name).prepend(pic);
            console.log(pkmn.id)
            pic.src = getImgLink+pkmn.id+".png";
        });




</script>

<template>
    <div id="pokemon" :class = "[pokemon.name]" >
        <div class="pokemon-name"> {{ pokemon.name }}</div>
       
    </div>
</template>

<style>
#pokemon{
    width: 150px;
    height: 150px;
    text-align: center;
    background-color: beige;
    

}

</style>