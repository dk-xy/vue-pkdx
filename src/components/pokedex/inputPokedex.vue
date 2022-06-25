<script setup>
import { ref, computed } from 'vue';




import OnePokemon from './onePokemon.vue';


const arrayTest = ref([{name: 'sandro'}, {name: 'julie'}]);
let pokemons = ref([{}]);
let pokemonIsLoaded = ref(false)

function loadGen(e) {
    let linkToLoad = ref('')
    let limit = ref('')
    // .fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    // .then(resp.json())
    // .then()
    let baseString = computed(() => {
        return `https://pokeapi.co/api/v2/pokemon/${limit.value}`
    })

    console.log(e.target.classList)
    switch (true) {
        case e.target.classList.contains('one'):
            console.log('hello')
            limit.value = '?limit=151'
            break;
        case e.target.classList.contains('two'):
            console.log('hello')
            limit.value = '?limit=100&offset=151'
        default:
            break;
    }
    fetch(baseString.value)
        .then(resp => resp.json())
        .then(allPokemons => {
            pokemons.value = allPokemons.results
            pokemonIsLoaded.value = true;

            console.log(pokemons.value)
            console.log(arrayTest.value)
        })
        

}
</script>

<template>
    <div class="inputSection">
        <button class="gen one" @click="loadGen($event)">First Gen</button>
        <button class="gen two" @click="loadGen($event)">Second Gen</button>
    </div>
    
    <div class="allPokemons">
        <div class="pokemon" v-show="pokemonIsLoaded" v-for="(pokemon) in pokemons">
            <OnePokemon :pokemon="pokemon" :key="key"></OnePokemon>
        </div>
    </div>

</template>

<style>

.allPokemons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}


</style>