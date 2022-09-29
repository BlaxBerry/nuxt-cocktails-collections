<template>
  <el-menu
    :default-active="activeIndex"
    :ellipsis="false"
    @select="handleSelect"
    active-text-color="#c0856c"
    background-color="#242b32"
    mode="horizontal"
    style="border: 0"
    text-color="#fff"
  >
    <!-- 1. logo -->
    <div class="my-layout-header-logo">
      <h1>SHAKIN' COCKTAILS</h1>
      <small>SEARCHING AND COLLECTIONS OF COCKTAILS</small>
    </div>

    <!-- 2. 间隔占位标签 -->
    <div style="flex-grow: 1" />

    <!-- 3. main naviagtions  -->
    <el-menu-item index="1">Search</el-menu-item>
    <el-menu-item index="2">Collections</el-menu-item>
    <el-sub-menu index="3">
      <template #title>Categories</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
    </el-sub-menu>

    <!-- 4. tools -->
    <div>
      <CommonToolsThemeSwitcher />
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref<string>("2");

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.my-layout-header-logo {
  color: $main-color-2 !important;
  position: relative;
  text-align: center;
  width: 300px;

  h1 {
    font-size: 1.5rem !important;
    line-height: 1.5rem;
    margin: 0;
    position: absolute;
    top: 1rem;
    width: 100%;
  }
  small {
    bottom: 0.3rem;
    font-size: 0.5rem !important;
    height: 15px;
    left: 0;
    line-height: 15px;
    position: absolute;
    width: 100%;
  }
}
</style>
