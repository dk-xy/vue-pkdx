import { ref, computed } from 'vue';
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