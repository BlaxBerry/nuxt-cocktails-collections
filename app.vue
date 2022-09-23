<template>
  <NuxtLayout>
    <el-config-provider :locale="locale">
      <NuxtPage />
    </el-config-provider>
  </NuxtLayout>
</template>

<script setup lang="ts">
// TODO: 放入 composables/
import zh from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
const locale = zh
</script>
