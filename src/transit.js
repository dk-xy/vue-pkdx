import { ref, computed } from 'vue';

import {
  useLocalstorage
} from './composables/localstorage.js'

export const page = ref('#pkdx');

export const onAbout = computed(()=>{
    return page.value === '#about'
  })

  export const onFav = computed(()=>{
    return page.value === '#fav'
  })

  export const onPkdx = computed(()=>{
    return page.value === '#pkdx'
  })



  export const {
    value: favourites
} = useLocalstorage('favourites', {});

export const favPokemons = ref([]);