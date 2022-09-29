<template>
  <!-- <el-tooltip :content="`Theme: ${$colorMode.value}`" placement="top"> -->
  <el-switch
    size="large"
    active-icon="El-Moon"
    inactive-icon="El-Sunny"
    @change="changeTheme"
    v-model="themeModeSwitcher"
    inline-prompt
    class="my-tools-theme-switcher"
    style="--el-switch-on-color: #c0856c; --el-switch-off-color: #cccccc"
  />
  <!-- </el-tooltip> -->
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const themeModeSwitcher = ref<boolean>(colorMode.preference === "dark");
const changeTheme = (isDark: boolean) => {
  if (isDark) colorMode.preference = "dark";
  else colorMode.preference = "light";
};
</script>

<style lang="scss" scoped>
.my-tools-theme-switcher {
  height: 100%;
}
</style>
