<template>
  <el-main class="my-page-detail">
    <div v-if="loading">{{ loading ? "loading..." : "" }}</div>
    <div v-else>
      <!-- title -->
      <CommonTitle>{{ cocktailDetail?.name }}</CommonTitle>

      <!-- content -->
      <el-row :gutter="20" :justify="'center'" :align="'top'">
        <!-- image -->
        <el-col :span="20" :md="8">
          <div>
            <el-image :src="cocktailDetail?.img" :alt="cocktailDetail?.name" />
            <!-- <small style="color: grey">{{ cocktailDetail?.imgSource }}</small> -->
          </div>
        </el-col>

        <el-col :span="24" :md="14">
          <!-- how to make it -->
          <p style="font-size: 1.3rem; margin-top: 0">
            {{ cocktailDetail?.instructions }}
          </p>
          <!-- ingredients -->
          <DetailPageIngredients :ingredients="cocktailDetail?.ingredients" />
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script setup lang="ts">
type CocktailIntredientType = {
  name: string;
  measure: string;
};

interface CocktailDetailType {
  name: string;
  img: string;
  imgSource: string;
  alcoholic: string;
  instructions: string;
  category: string;
  glass: string;
  ingredients: CocktailIntredientType[];
}

const route = useRoute();
const cocktailID = route?.params?.id;
const loading = ref<boolean>(true);
const cocktailDetail = reactive<CocktailDetailType>({
  name: "",
  img: "",
  imgSource: "",
  alcoholic: "",
  instructions: "",
  category: "",
  glass: "",
  ingredients: [],
});

const { queryCocltailDetailByID } = useRequestData();
const { queryCocltailDetailByIDProduction } = useRequestDateProduction();
const { handleCocktailIngredients } = useHelpers();

onMounted(() => {
  getCocktailDetail();
});

const getCocktailDetail = async () => {
  if (process.env.NODE_ENV === "production") {
    // @ts-ignore
    const res = (await queryCocltailDetailByIDProduction(cocktailID))
      ?.drinks?.[0];
    assign(res);
  } else {
    // @ts-ignore
    const res = (await queryCocltailDetailByID(cocktailID))?.drinks?.[0];
    assign(res);
  }
};

const assign = (cocktailObj) => {
  const {
    strDrink,
    strDrinkThumb,
    strImageSource,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
  } = cocktailObj;
  // console.log(cocktailObj);
  loading.value = false;

  cocktailDetail.name = strDrink;
  cocktailDetail.img = strDrinkThumb;
  cocktailDetail.imgSource = strImageSource;
  cocktailDetail.alcoholic = strAlcoholic;
  cocktailDetail.instructions = strInstructions;
  cocktailDetail.category = strCategory;
  cocktailDetail.glass = strGlass;
  cocktailDetail.ingredients = handleCocktailIngredients(cocktailObj);

  console.log(cocktailDetail);
};
</script>

<style lang="scss" scoped></style>
