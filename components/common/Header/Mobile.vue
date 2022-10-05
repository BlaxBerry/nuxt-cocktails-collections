<template>
  <!-- 1. logo -->
  <span>logo</span>

  <!-- 2. 间隔占位标签 -->
  <div style="flex-grow: 1" />

  <!-- 3. tool  -->
  <CommonToolsThemeSwitcher />

  <!-- 4. drawer menu  -->
  <CommonDrawer :direction="'btt'" :drawer-title="'SHAKIN\' COCKTAILS'">
    <el-menu
      :default-active="activeIndex"
      :ellipsis="false"
      :router="true"
      @select="handleSelect"
      active-text-color="#c0856c"
      background-color="#242b32"
      mode="vertical"
      style="border: 0"
      text-color="#fff"
    >
      <el-menu-item index="search">Search</el-menu-item>
      <el-menu-item index="home">Collections</el-menu-item>
      <el-sub-menu index="3" disabled>
        <template #title>Categories</template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </CommonDrawer>
</template>

<script setup lang="ts">
const activeIndex = ref<string>("home");

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.my-tools-theme-switcher {
  margin-right: 0.5rem;
}
</style>
