<template>
  <h3>CONTACT</h3>

  <p>Contact Email: thedatadb@gmail.com</p>

  <a :href="item.url" v-for="item in LINKS_LIST" :key="item.img">
    <img :src="item.img" alt="img" />
  </a>
</template>

<script setup lang="ts">
const LINKS_LIST = [
  {
    url: "https://www.facebook.com/TheDataDB/",
    img: "https://www.thecocktaildb.com/images/facebook_icon.png",
  },
  {
    url: "https://twitter.com/TheAudioDB",
    img: "https://www.thecocktaildb.com/images/twitter_icon.png",
  },
];
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 0;
}

a {
  color: $theme-color-2;
  text-decoration: none;
  margin-right: 10px;
}
</style>
