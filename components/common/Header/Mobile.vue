<template>
  <!-- 1. logo -->
  <span>logo</span>

  <!-- 2. 间隔占位标签 -->
  <div style="flex-grow: 1" />

  <!-- 3. drawer menu  -->
  <CommonDrawer :direction="'btt'" :drawer-title="'Menu'">
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </CommonDrawer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
