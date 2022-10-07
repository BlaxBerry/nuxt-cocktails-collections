type CocktailIntredientType = {
  name: string;
  measure: string;
};

export default function useHelpers() {
  /**
   * join Ingredient names & ingredient's measures as an array
   * @param cocktailObj
   * @returns
   */
  const handleCocktailIngredients = (cocktailObj: {
    [key: string]: string;
  }): CocktailIntredientType[] => {
    const ingredient_names: string[] = [];
    const ingredient_measures: string[] = [];

    for (const key in cocktailObj) {
      if (cocktailObj[key]) {
        const isIngredient = /^strIngredient/.test(key);
        const isMeasure = /^strMeasure/.test(key);
        if (isIngredient) ingredient_names.push(cocktailObj[key]);
        if (isMeasure) ingredient_measures.push(cocktailObj[key]);
      }
    }
    return ingredient_names.map((e, i) => ({
      name: e,
      measure: ingredient_measures[i],
    }));
  };

  return { handleCocktailIngredients };
}
