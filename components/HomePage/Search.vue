<template>
  <div class="my-page-home-search">
    <el-main>
        Search
    </el-main>
    
   </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-page-home-search {
  height: 100vh;
  position: relative;
  color: $main-color-1;

  @mixin pseudo-element {
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::after {
    @include pseudo-element;
    background: url("~/assets/images/background-white.jpg") 0 100% no-repeat;
    z-index: -1;
  }

  &::before {
    @include pseudo-element;
    background-color: rgba($main-color-1, 0.3);
    z-index: 1;
  }
}
</style>
