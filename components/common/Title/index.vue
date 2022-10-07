<template>
  <div class="my-title">
    <el-row :gutter="20">
      <el-col :xs="0" :sm="8" class="diver-line left" />
      <el-col :xs="24" :sm="8" class="diver-text">
        <slot />
      </el-col>
      <el-col :xs="0" :sm="8" class="diver-line right" />
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.my-title {
  position: relative;
  margin-bottom: 20px;

  .diver-text {
    color: $main-color-2;
    font-size: 3rem;
    text-align: center;
  }

  .diver-line {
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 80%;
      border-top: 2px solid $main-color-2;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .left::after {
    right: 0;
  }

  .right::after {
    left: 0;
  }
}
</style>
