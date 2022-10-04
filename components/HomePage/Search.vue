<template>
  <el-main class="my-page-home-search">
    <!-- title -->
    <h1 class="my-title">Search</h1>

    <el-row :justify="'center'" :align="'middle'" style="height: 50%">
      <el-col :xs="24" :sm="12">
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
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
const searchInput = ref<string>("");
const { searchCocltailsList } = useRequestData();

const getSearchInputValue = async (event: FocusEvent) => {
  console.log(searchInput.value);
  console.log(await searchCocltailsList(searchInput.value));
};
</script>

<style lang="scss" scoped>
.my-page-home-search {
  background: url("~/assets/images/background-white.jpg") 0 100% no-repeat;
  min-height: 80vh;
  position: relative;

  h1.my-title {
    color: $main-color-2;
    font-size: 48px;
    text-align: center;
  }
}
</style>
