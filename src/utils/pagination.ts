/**
 * Determine the labels and pages to be shown in the pagination component
 * @param totalCount - Total products
 * @param currentPage - Current page
 * @returns pages
 */
const pagination = (totalCount: number, currentPage: number) => {
    let pages: Array<number | string> = [];
    const lastPage = Math.ceil(totalCount > 16 ? totalCount / 16 : 1);

    if (lastPage > 10) {
        pages.push(1);
        pages.push(2);
        if (currentPage >= 5 && currentPage < lastPage - 2) {
            pages.push("...");
            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
            pages.push("...");
            pages.push(lastPage - 1);
            pages.push(lastPage);
        } else if (currentPage === lastPage - 1) {
            pages.push("...");
            pages.push(currentPage-1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
        }else if (currentPage === lastPage - 2) {
            pages.push("...");
            pages.push(currentPage-1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
        }else if (currentPage < 5) {
            pages.push(3);
            pages.push(4);
            pages.push(5);
            pages.push("...");
            pages.push(lastPage - 1);
            pages.push(lastPage);
        } else if (currentPage === lastPage) {
            pages.push("...");
            pages.push(lastPage - 2);
            pages.push(lastPage - 1);
            pages.push(lastPage);
        }
    } else {
        for (let index = 0; index < lastPage; index++) {
            pages.push(index + 1);
        }
    }

    return pages;
}

export default pagination;