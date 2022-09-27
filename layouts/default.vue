<template>
  <div>
    <el-container class="my-layout">
      <!-- title -->
      <el-header class="my-layout-header">
        <CommonHeader />
      </el-header>

      <!-- page content -->
      <div class="my-layout-main">
        <slot />
        <CommonBackTop />
      </div>

      <!-- footer -->
      <div class="my-layout-footer">
        <CommonFooter />
      </div>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped></style>
