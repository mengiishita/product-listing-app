export type Query = {
    page: string,
    _order: "asc" | "desc",
    _sort: string,
    tags: string[],
    brand: string[],
    itemType: string,
}