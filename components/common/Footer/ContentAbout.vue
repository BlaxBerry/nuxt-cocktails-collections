<template>
  <h3>RELATED SITES</h3>

  <a :href="item.url" v-for="item in IMGAGES_LIST" :key="item.img">
    <img :src="item.img" alt="img" />
  </a>
</template>

<script setup lang="ts">
const IMGAGES_LIST = [
  {
    url: "https://www.thecocktaildb.com/",
    img: "https://www.theaudiodb.com/images/logo-tcdb.png",
  },
  {
    url: "https://www.thesportsdb.com/",
    img: "https://www.thecocktaildb.com/images/logo-tsdb.png",
  },
  {
    url: "https://www.theaudiodb.com/",
    img: "https://www.thecocktaildb.com/images/logo-tadb.png",
  },
  {
    url: "https://www.themealdb.com/",
    img: "https://www.thecocktaildb.com/images/logo-tmdb.png",
  },
];
</script>

<style lang="scss" scoped>
a {
  margin-right: 1rem;
}
</style>
