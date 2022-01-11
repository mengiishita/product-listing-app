import { Company } from "./Company"
import { ProductType } from "./ProductType"
import { Tag } from "./Tag"

export type Filters = {
    tags: Tag[],
    slug_companies: Company[],
    types: ProductType[],
}