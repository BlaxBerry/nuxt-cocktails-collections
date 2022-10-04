export default function useRequestData() {
  /**
   * search cocktails list by name
   * 
   * params is not necessary, if name is not sent api will return all cocktails list sorted by first letter
   * @param cocktailName
   * @returns
   */
  const queryCocltailsListByName = async (cocktailName?: string) => {
    return await $fetch(`/api/cocktails?name=${cocktailName}`);
  };

  /**
   * Search cocktail detail list by cocktail ID.
   * @param cocktailID
   * @returns
   */
  const queryCocltailDetailByID = async (cocktailID: string) => {
    return await $fetch(`/api/cocktail?id=${cocktailID}`);
  };

  /**
   * get (100x100 pixels) size image form cocktail object
   * @param imgURL
   * @returns
   */
  const getCocktailImagePreview = (imgURL: string) => {
    return `${imgURL}/preview`; // (100x100 pixels)
  };

  /**
   * get the list of cocktals filtered by params
   * @param filterName
   * @param params
   * @returns
   */
  const queryCocltailsListByFilter = async (
    filterName: string,
    params: string
  ) => {
    return await $fetch(`/api/cocktails?${filterName}=${params}`);
  };

  /**
   * get the list of filters
   * @param filterName
   * @returns
   */
  const queryFiltersList = async (filterName: string) => {
    return await $fetch(`/api/filters?name=${filterName}`);
  };

  /**
   * Search cocktail's ingredients of the params.
   *
   * Basically used for getting the detail of ingredient from cocktail object
   * @param ingredientName
   * @returns
   */
  const queryIngredientDetail = async (ingredientName: string) => {
    return await $fetch(`/api/ingredients?name=${ingredientName}`);
  };

  /**
   * get ingredient's image of cocktail
   *
   * Basically used for getting the image of ingredient from cocktail object
   * @param ingredientName
   * @returns
   */
  const getIngredientImage = async (ingredientName: string) => {
    return await $fetch(`/api/image?ingredient=${ingredientName}`);
  };

  return {
    queryCocltailsListByName,
    queryCocltailDetailByID,
    getCocktailImagePreview,
    queryCocltailsListByFilter,
    queryFiltersList,
    queryIngredientDetail,
    getIngredientImage,
  };
}
