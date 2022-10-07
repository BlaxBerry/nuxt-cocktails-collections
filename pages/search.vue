<template>
  <el-main class="my-page-search">
    <!-- 1. title -->
    <CommonTitle>Search</CommonTitle>

    <div class="my-page-search-content">
      <!-- 2. input -->
      <SearchPageInput @onGetInputValue="handleSearchInputValue" />
      <!-- 3. list -->
      <!-- <el-scrollbar max-height="70vh" style="padding: 20px 0 20px; overflow-x: hidden"> -->
      <SearchPageList :list="searchResultList" />
      <!-- </el-scrollbar> -->
    </div>
  </el-main>
</template>

<script setup lang="ts">
const searchResultList = ref([]);

const { queryCocltailsListByName } = useRequestData();
const { queryCocltailsListByNameProduction } = useRequestDateProduction();

const handleSearchInputValue = (searchInputValue: string) => {
  init(searchInputValue)
};

const init = async (inputValue:string) => {
  if (process.env.NODE_ENV === "production") {
    const res = await // @ts-ignore
    queryCocltailsListByNameProduction(inputValue)?.drinks;
    searchResultList.value = res ? res : [];
  } else {
    // @ts-ignore
    const res = (await queryCocltailsListByName(inputValue))?.drinks;
    searchResultList.value = res ? res : [];
  }
  // console.log(searchResultList.value);
}

onMounted(() => {
  init('')
})
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
