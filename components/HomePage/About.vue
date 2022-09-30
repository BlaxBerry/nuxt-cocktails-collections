<template>
  <div class="my-page-home-about">
    <el-main style="overflow-y: hidden">
      <!-- title -->
      <CommonTitle>Features</CommonTitle>

      <el-row :justify="'center'" :align="'middle'" style="height: 50%">
        <el-col :xs="8" :sm="6"> x </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-page-home-about {
  $triangle-height: 20vh;

  min-height: 50vh;
  padding: $triangle-height 0;
  position: relative;

  &::before {
    border-left: 50vw solid $main-color-2;
    border-right: 50vw solid $main-color-2;
    border-top: $triangle-height solid transparent;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: -$triangle-height;
    z-index: 2;
  }

  @media only screen and (max-width: $screen-min-width) {
    &::before {
      display: none;
    }
  }
}

.theme-dark .my-page-home-about::before {
  border-left-color: $theme-color-1;
  border-right-color: $theme-color-1;
}

.theme-light .my-page-home-about::before {
  border-left-color: $theme-color-2;
  border-right-color: $theme-color-2;
}
</style>
