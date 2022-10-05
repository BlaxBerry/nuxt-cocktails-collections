<template>
  <el-main class="my-page-search">
    <!-- title -->
    <CommonTitle>Search</CommonTitle>

    <div class="my-page-search-content">
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
  </el-main>
</template>

<script setup lang="ts">
import { ElLoading } from "element-plus";

const searchInput = ref<string>("");
const { queryCocltailsListByName } = useRequestData();
const { queryCocltailsListByNameProduction } = useRequestDateProduction();

const getSearchInputValue = async (event: FocusEvent) => {
  openLoadingStatus();

  // console.log(searchInput.value);
  if (process.env.NODE_ENV === "production") {
    console.log(
      process.env.NODE_ENV,
      (await queryCocltailsListByNameProduction(searchInput.value))?.drinks
    );
  } else {
    console.log(
      process.env.NODE_ENV,
      // @ts-ignore
      (await queryCocltailsListByName(searchInput.value))?.drinks
    );
  }
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
.my-page-search {
  background-image: linear-gradient(white, rgba($theme-color-1, 0.5)),
    url("~/assets/images/background-white.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 90vh;
  position: relative;

  padding-top: 70px;

  &-content {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
  }
}
</style>
