/**
 * only for github page
 *
 * process.env.NODE_ENV === 'production'
 */

const SEARCH_COCKTAILS_BY_NAME = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
const SEARCH_COCKTAILS_SORTED_BY_FIRST_LETTER = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
const SEARCH_COCKTAIL_BY_ID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
const FILTER_COCKTAILS_BY_CATEGORY = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=`;
const FILTER_COCKTAILS_BY_GLASS = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=`;
const FILTER_COCKTAILS_BY_INGREDIENT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`;
const FILTER_COCKTAILS_BY_ALCOHOLIC = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=`;
const LIST_OF_CATEGORIES = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
const LIST_OF_GLASSES = `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`;
const LIST_OF_INGREDIENTS = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
const LIST_OF_ALCOHOLIC = `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`;
const SEARCH_INGREDIENTS_BY_NAME = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=`;
const IMAGE_OF_INGREDIENT = `www.thecocktaildb.com/images/ingredients/`;

export default function useRequestDataProduction() {
  /**
   * search cocktails list by name
   *
   * params is not necessary, if name is not sent api will return all cocktails list sorted by first letter
   * @param cocktailName
   * @returns
   */
  const queryCocltailsListByNameProduction = async (cocktailName?: string) => {
    return (await fetch(SEARCH_COCKTAILS_BY_NAME + cocktailName)).body;
  };

  /**
   * Search cocktail detail list by cocktail ID.
   * @param cocktailID
   * @returns
   */
  const queryCocltailDetailByIDProduction = async (cocktailID: string) => {
    return (await fetch(SEARCH_COCKTAIL_BY_ID + cocktailID)).body;
  };

  /**
   * get (100x100 pixels) size image form cocktail object
   * @param imgURL
   * @returns
   */
  const getCocktailImagePreviewProduction = (imgURL: string) => {
    return `${imgURL}/preview`; // (100x100 pixels)
  };

  /**
   * get the list of cocktals filtered by params
   * @param filterName
   * @param params
   * @returns
   */
  const queryCocltailsListByFilterProduction = async (
    filterName: string,
    params: string
  ) => {
    // 2.1 filtered by [categories]
    switch (filterName) {
      case "category":
        return (await fetch(FILTER_COCKTAILS_BY_CATEGORY + params)).body;
      case "ingredient":
        return (await fetch(FILTER_COCKTAILS_BY_CATEGORY + params)).body;
      case "calcoholic":
        return (await fetch(FILTER_COCKTAILS_BY_CATEGORY + params)).body;
      case "glass":
        return (await fetch(FILTER_COCKTAILS_BY_CATEGORY + params)).body;
      default:
        return (await fetch(FILTER_COCKTAILS_BY_CATEGORY + params)).body;
    }
  };

  /**
   * get the list of filters
   * @param filterName
   * @returns
   */
  const queryFiltersListProduction = async (filterName: string) => {
    switch (filterName) {
      case "categories":
        return (await fetch(LIST_OF_CATEGORIES)).body;
      case "ingredients":
        return (await fetch(LIST_OF_INGREDIENTS)).body;
      case "alcoholic":
        return (await fetch(LIST_OF_ALCOHOLIC)).body;
      case "glasses":
        return (await fetch(LIST_OF_GLASSES)).body;
      default:
        return (await fetch(LIST_OF_CATEGORIES)).body;
    }
  };

  /**
   * Search cocktail's ingredients of the params.
   *
   * Basically used for getting the detail of ingredient from cocktail object
   * @param ingredientName
   * @returns
   */
  const queryIngredientDetailProduction = async (ingredientName: string) => {
    return (await fetch(SEARCH_INGREDIENTS_BY_NAME + ingredientName)).body;
  };

  /**
   * get ingredient's image of cocktail
   *
   * Basically used for getting the image of ingredient from cocktail object
   * @param ingredientName
   * @returns
   */
  const getIngredientImageProduction = async (ingredientName: string) => {
    return (await fetch(IMAGE_OF_INGREDIENT + ingredientName + ".png")).body;
  };

  return {
    queryCocltailsListByNameProduction,
    queryCocltailDetailByIDProduction,
    getCocktailImagePreviewProduction,
    queryCocltailsListByFilterProduction,
    queryFiltersListProduction,
    queryIngredientDetailProduction,
    getIngredientImageProduction,
  };
}
