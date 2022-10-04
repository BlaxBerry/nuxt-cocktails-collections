/**
 * get the filters params list
 * /filters?name=[name]
 */

import {
  LIST_OF_CATEGORIES,
  LIST_OF_GLASSES,
  LIST_OF_INGREDIENTS,
  LIST_OF_ALCOHOLIC,
} from "../utils/urls";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  let URL: string = "";

  switch (query?.name) {
    case "categories":
      URL = LIST_OF_CATEGORIES;
      break;
    case "ingredients":
      URL = LIST_OF_INGREDIENTS;
      break;
    case "alcoholic":
      URL = LIST_OF_ALCOHOLIC;
      break;
    case "glasses":
      URL = LIST_OF_GLASSES;
      break;
    default:
      URL = LIST_OF_CATEGORIES;
      break;
  }

  const res = await fetch(URL);
  return res.body;
});
