<script setup>
import { page, onAbout } from '../transit.js'

window.addEventListener('hashchange', () => {
    console.log(window.location.hash)
    page.value = window.location.hash
    console.log(onAbout.value)
    

})
</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="#pkdx">Pokédex</a>
            </li>
            <li>
                <a href="#fav">Favourites</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
        </ul>
    </nav>
</template>

<style>

html{
    margin-top: -20px;
}
nav {

    width: 100%;
    margin: none !important;

    background: rgb(0, 0, 0);
    -webkit-box-shadow: 0px 3px 10px 8px rgba(255, 255, 255, 0.76);
    box-shadow: 0px 3px 10px 8px rgba(255, 255, 255, 0.767);
    z-index: 1;


}

ul {

    padding: 40px 60px 40px 40px;

}

li {
    display: inline;
    padding: 20px 30px 20px 30px;
    color: white;
}

li a {
    color: white !important;
    text-decoration: none;
    padding: 20px 30px 20px 30px;
    font-weight: 800;
}

li:hover {
    background-color: rgb(236, 0, 0, 0.8);
    transition: 0.5s;
}
</style>