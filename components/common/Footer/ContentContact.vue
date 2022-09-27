<template>
  <h3>CONTACT INFORMATION</h3>

  <p>xxxxx</p>

  <div class="my-contact-icon-links">
    <el-image
      style="width: 30px; height: 30px;margin-right: 10px;"
      :src="url"
      v-for="item in [1, 2, 3]"
      :key="item"
    />
  </div>
</template>

<script setup lang="ts">
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<style lang="scss" scoped>
.my-contact-icon-links {
  display: flex;
}
</style>
