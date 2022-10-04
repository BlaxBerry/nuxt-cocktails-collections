/**
 * get ingredient's image of cocktail
 * Basically used for getting the image of ingredient from cocktail object
 *
 * /image?ingredient=[name]
 */

import { IMAGE_OF_INGREDIENT } from "../utils/urls";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const res = await fetch(IMAGE_OF_INGREDIENT + query?.ingredient + ".png");

  return res.body;
});
