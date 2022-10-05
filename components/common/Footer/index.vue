<template>
  <!-- contents grid -->
  <el-row :gutter="20" class="my-layout-footer-content">
    <el-col :span="24" class="my-layout-footer-content-item">
      <CommonFooterContentContact />
    </el-col>
    <el-col :span="24" class="my-layout-footer-content-item">
      <CommonFooterContentAbout />
    </el-col>
  </el-row>

  <!-- copyright -->
  <div class="my-copyright">
    Copyright © 2022 · All Rights Reserved · crafted by Blaxberry
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.my-layout-footer-content {
  .el-col {
    text-align: center;
  }
}
</style>
