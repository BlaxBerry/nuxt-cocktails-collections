<template>
  <el-row :gutter="20">
    <el-col
      :span="6"
      :xs="8"
      :md="6"
      :lg="6"
      v-for="item in ingredients"
      :key="item.name"
    >
      <div>
        <CommonImage
          :src="getIngredientImage(item?.name?.toLocaleLowerCase())"
        />
      </div>
      <div style="text-align: center">
        <strong>{{ item?.name }} </strong>
        <small>{{ item?.measure }}</small>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
defineProps<{
  ingredients: { name: string; measure: string }[];
}>();

const { getIngredientImage } = useRequestData();
</script>

<style lang="scss" scoped></style>
