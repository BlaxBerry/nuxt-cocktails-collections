import { SEARCH_INGREDIENTS_BY_NAME as URL } from "../utils/urls";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const res = await fetch(URL + query?.name);

  return res.body;
});
