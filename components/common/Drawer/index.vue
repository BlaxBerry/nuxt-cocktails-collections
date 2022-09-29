<template>
  <el-button @click="visible = true" color="$main-color-1">
    <el-icon>
      <El-Menu />
    </el-icon>
  </el-button>

  <el-drawer v-model="visible" :direction="'ttb'">
    <!-- drawer title -->
    <template #title>
      <h1>{{ drawerTitle }}</h1>
    </template>

    <el-divider style="margin-top: 0;"/>

    <!-- drawer content -->
    <slot />
  </el-drawer>
</template>

<script setup lang="ts">
defineProps<{
  direction: "ltr" | "rtl" | "ttb" | "btt";
  drawerTitle: string;
}>();

const visible = ref(false);
</script>

<style lang="scss" scoped></style>
