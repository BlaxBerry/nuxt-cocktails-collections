/**
 * search cocktail's detail by its ID
 * /cocktail?id=[ID]
 */

import { SEARCH_COCKTAIL_BY_ID as URL } from "../utils/urls";

export default defineEventHandler(async (event) => {
    const query = useQuery(event);
    const res = await fetch(URL + query?.id);

    return res.body;
});
