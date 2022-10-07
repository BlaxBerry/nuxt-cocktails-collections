<template>
  <el-image :src="src" loading="lazy" lazy :fit="'cover'" style="display: block">
    <!-- <template #placeholder>
      <div class="image-placeholder"></div>
    </template> -->
  </el-image>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<style lang="scss" scoped></style>
