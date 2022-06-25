<script setup>


</script>

<template>
    <div class="about">
        <span class="title sect">About</span>
        <div class="aboutSite sect">
            <div class="sub">The website</div>
            This pokédex has been made thanks to <a href="https://pokeapi.co/">Pokéapi</a>
            Pokémon is a trademark of Nintendo and The Pokémon Company.
            This website has been made for learning purpose.
        </div>
        <div class="aboutMe sect">
            <div class="sub">Me</div>
            Meet Daniel, a passionate about all things relatated to technology.
        </div>
    </div>
    <div class="contact">
            <span class="title">Contact</span>

    </div>
</template>

<style>
.about {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
    gap: 100px;
    
    background-color: rgb(20, 20, 20);
    margin:-20px 0px 0px 0px;
    padding-bottom: 100px;
    color: white;
}



.sect {
  display: inline-block;
  border-radius: 6px;
  padding: 20px;
}

.sect:first-child {
  width: 100%;
}

.sect:not(:first-child) {
  flex: 1;
}


@media only screen and (max-width: 600px) {
    .about {

        flex: none;
    }

}



.title {
  margin: 12px;
}

.aboutSite, .aboutMe {

  margin: -20px 20px 0px 20px;
  min-width: 200px;;
}
.title {
    font-size: 40px;
    font-weight: 100;
    font-weight: 800;
}

.sub {
    font-size: 32px;
    font-weight: 100;
    font-family: Arial;

}


</style>