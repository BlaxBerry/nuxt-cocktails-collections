<template>
  <el-divider class="my-title">
    <h1>
      <slot />
    </h1>
  </el-divider>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.my-title .el-divider__text {
  font-size: 2rem;
  color: $main-color-2;
}

.el-divider--horizontal {
  border-top-color: $main-color-2;
}

.theme-dark .my-title .el-divider__text {
  background-color: $theme-color-1;
}

.theme-light .my-title .el-divider__text {
  background-color: $theme-color-2;
}
</style>
