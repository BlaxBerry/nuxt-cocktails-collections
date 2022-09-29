<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item
      :title="item.title"
      :name="index"
      v-for="(item, index) in list"
      :key="item.title"
    >
      <div>
        {{ item.message }}
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
export interface CollapseListItem {
  title: string;
  message: string;
}
const activeName = ref("1");

defineProps<{ list: Array<CollapseListItem> }>();
</script>

<style lang="scss" scoped></style>
