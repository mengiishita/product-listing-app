import { Query } from "../models/Query";

/**
 * Generate the query string for fetching products, takes into account filters and sort
 * @param query - Query model which details the filters and sorting options.
 * @returns Generated query string.
 */
const queryBuilder = (query: Query) => {
    let queryString = "?page=" + query.page + "&";

    if (query.brand[0] !== "All") {
        query.brand.forEach(item => {
            queryString += `manufacturer=${item}&`;
        });
    }

    if (query.itemType !== "") {
        queryString += `itemType=${query.itemType}&`;
    }

    if (query.tags[0] !== "All") {
        query.tags.forEach(item => {
            queryString += `tags_like=${item}&`;
        });
    }

    if (query._sort !== "") {
        queryString += `_order=${query._order}&_sort=${query._sort}`;
    }

    return queryString;

}

export default queryBuilder;