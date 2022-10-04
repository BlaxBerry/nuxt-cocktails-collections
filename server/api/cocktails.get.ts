/**
 * search cocktails list by name
 * /cocktails?name=[name]
 *
 * get the list of cocktals filtered by params
 * /cocktails?filter=[params]
 */

import {
  SEARCH_COCKTAILS_BY_NAME,
  SEARCH_COCKTAILS_SORTED_BY_FIRST_LETTER,
  FILTER_COCKTAILS_BY_CATEGORY,
  FILTER_COCKTAILS_BY_GLASS,
  FILTER_COCKTAILS_BY_INGREDIENT,
  FILTER_COCKTAILS_BY_ALCOHOLIC,
} from "../utils/urls";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  // 1. return cocktails list whose name includes name
  if (query?.name) {
    const res = await fetch(SEARCH_COCKTAILS_BY_NAME + query?.name);
    return res.body;
  }

  // 2. return cocktals list filtered
  // 2.1 filtered by [categories]
  if (query?.category) {
    const res = await fetch(FILTER_COCKTAILS_BY_CATEGORY + query?.category);
    return res.body;
  }
  // 2.2 filtered by [ingredients]
  if (query?.ingredient) {
    const res = await fetch(FILTER_COCKTAILS_BY_INGREDIENT + query?.ingredient);
    return res.body;
  }
  // 2.3 filtered by [alcoholic]
  if (query?.alcoholic) {
    const res = await fetch(FILTER_COCKTAILS_BY_ALCOHOLIC + query?.alcoholic);
    return res.body;
  }
  // 2.4 filtered by [glasses]
  if (query?.glass) {
    const res = await fetch(FILTER_COCKTAILS_BY_GLASS + query?.glass);
    return res.body;
  }

  // 3. return all cocktails list sorted by first letter
  else {
    const res = await fetch(SEARCH_COCKTAILS_SORTED_BY_FIRST_LETTER);
    return res.body;
  }
});
