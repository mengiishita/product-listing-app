/**
 * Generates the query string for searching brand filter or tag filter in custom input box
 * @param data - Either the name of a brand or tag
 * @param text - Text typed by the user in the input box
 * @returns query string
 */
import { Company } from "../models/Company"
import { Tag } from "../models/Tag"

const search = (data: Company[] | Tag[], text: string) => {
    return data.filter((item) =>
        item.name.toLowerCase().match(text.toLowerCase())
    )
}

export default search;