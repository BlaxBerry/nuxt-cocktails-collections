<template>
  <el-main class="my-page-search">
    <!-- 1. title -->
    <CommonTitle>Search</CommonTitle>

    <div class="my-page-search-content">
      <!-- 2. input -->
      <SearchPageInput @onGetInputValue="handleSearchInputValue" />

      <div v-if="searchResult.loading">
        {{ searchResult.loading ? "loading..." : "" }}
      </div>
      <!-- 3. list -->
      <div v-else>
        <SearchPageList :list="searchResult?.list" />
      </div>
    </div>
  </el-main>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import useRequestData from "../composables/useRequestData";
import useRequestDateProduction from "../composables/useRequestDateProduction";

const searchResult = reactive({
  list: [],
  loading: false,
});

const { queryCocltailsListByName } = useRequestData();
const { queryCocltailsListByNameProduction } = useRequestDateProduction();

const handleSearchInputValue = (searchInputValue: string) => {
  searchResult.loading = true;
  init(searchInputValue);
};

const init = async (inputValue: string) => {
  if (process.env.NODE_ENV === "production") {
    // @ts-ignore
    const res = await queryCocltailsListByNameProduction(inputValue)?.drinks;
    searchResult.list = res;
    searchResult.loading = false;
  } else {
    // @ts-ignore
    const res = (await queryCocltailsListByName(inputValue))?.drinks;
    searchResult.list = res;
    searchResult.loading = false;
  }
  console.log(searchResult);
};

onMounted(() => {
  searchResult.loading = true;
  init("");
});
</script>

<style lang="scss" scoped>
.my-page-search {
  &-content {
    min-height: 65vh;

    .el-input {
      width: 80% !important;
    }
  }
}
</style>
