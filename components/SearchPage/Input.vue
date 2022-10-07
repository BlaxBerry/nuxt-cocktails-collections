<template>
  <div class="my-page-search-input-wrap">
    <el-input
      v-model="searchInput"
      placeholder="Please input"
      size="large"
      clearable
      v-on:keyup.enter="getSearchInputValue"
    >
      <template #append>
        <el-button :icon="'El-Search'" @click="getSearchInputValue" />
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ElLoading } from "element-plus";

const searchInput = ref<string>("");

const emit = defineEmits<{
  (e: "onGetInputValue", value: string): void;
}>();

const getSearchInputValue = async (event: FocusEvent) => {
  // 1. show laoding
  openLoadingStatus();
  // 2. send value to father component
  // console.log(searchInput.value);
  emit("onGetInputValue", searchInput.value);
};

const openLoadingStatus = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 2000);
};
</script>

<style lang="scss" scoped>
.my-page-search-input-wrap {
  text-align: center;

  .el-input {
    width: 80% !important;
    @media only screen and (min-width: 1200px) {
      width: 60% !important;
    }

    .el-input-group__append {
      background-color: aqua !important;
    }
  }
}
</style>
