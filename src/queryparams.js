export {createSearchParams}

const API_KEY = '36429050-2dd6aecce9383c2193efec34d';
const LIMIT = 40;

const createSearchParams = () => {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: LIMIT,
    });

    return params.toString();
};
