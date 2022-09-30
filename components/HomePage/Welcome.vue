<template>
  <div class="my-page-home-welcome">
    <el-row :gutter="20" style="margin-top: -10rem">
      <el-col :span="24"><h1>WELCOME</h1></el-col>
      <el-col :span="24"><h1>SHAKIN' COCKTAILS</h1></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-page-home-welcome {
  align-items: center;
  background: url("~/assets/images/background-white.jpg") 0 100% no-repeat;
  display: flex;
  justify-content: center;
  height: 90vh;
  position: relative;

  &::before {
    background-color: rgba($main-color-1, 0.7);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  h1 {
    text-align: center;
    color: #fff;
  }
}
</style>
