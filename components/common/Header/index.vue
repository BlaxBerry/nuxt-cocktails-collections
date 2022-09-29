<template>
  <el-row>
    <el-col :span="24" class="hidden-sm-and-down my-layout-header-pc">
      <CommonHeaderPC />
    </el-col>
    <el-col :span="24" class="hidden-md-and-up my-layout-header-mobile">
      <CommonHeaderMobile />
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
