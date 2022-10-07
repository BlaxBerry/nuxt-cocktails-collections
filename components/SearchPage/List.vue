<template>
  <el-row :gutter="20" style="padding: 20px 0 20px">
    <el-col
      v-for="item in list"
      :key="item?.idDrink"
      :xs="xs || 8"
      :sm="sm || 6"
      :md="md || 4"
      :lg="lg || 4"
      @click="onClick(item)"
    >
      <el-card :body-style="{ padding: '0px' }">
        <CommonImage :src="item?.strDrinkThumb" />
      </el-card>

      <span class="title"> {{ item?.strDrink }}</span>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
defineProps<{
  list: { [key: string]: string }[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}>();

const onClick = (item) => {
  // console.log(item);
  navigateTo(`/${item?.idDrink}`);
};
</script>

<style lang="scss" scoped>
.el-card {
  cursor: pointer !important;
}

.title {
  display: inline-block;
  text-align: center;
  width: 100%;
}
</style>
