export default function useRequestData() {
  /**
   * Search cocktails list by params, whose name includes the params even if only one word.
   * @param cocktailName
   * @returns
   */
  const searchCocltailsList = async (cocktailName: string) => {
    return await $fetch(`/api/searchCocktailsList?name=${cocktailName}`);
  };

  /**
   * Search cocktail detail list by cocktail ID.
   * @param cocktailID
   * @returns
   */
  const searchCocltailDetail = async (cocktailID: string) => {
    return await $fetch(`/api/searchCocktailDetail?id=${cocktailID}`);
  };

  /**
   * Search drink's ingredients of the params.
   * @param drinkName
   * @returns
   */
  const searchIngredients = async (drinkName: string) => {
    return await $fetch(`/api/searchIngredients?name=${drinkName}`);
  };

  return {
    searchCocltailsList,
    searchCocltailDetail,
    searchIngredients,
  };
}
