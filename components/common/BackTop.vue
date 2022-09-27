<template>
  <el-backtop
    :right="50"
    :bottom="100"
    visibility-height="500"
    class="my-backtop"
  />
</template>

<style lang="scss" scoped>
.my-backtop {
  background-color: transparent;
  border: 2px solid $main-color-2;
  box-shadow: var(--el-box-shadow-lighter);
  color: $main-color-2;
}
</style>
