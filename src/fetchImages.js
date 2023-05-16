import Notiflix from 'notiflix';
export { fetchImages }

const API_URL = 'https://pixabay.com/api/?'

function fetchImages() {
const URL = (API_URL + createSearchParams());

    axios.get(URL)
        .then(response => {
            const data = response.data;


            if (data.totalHits > 0) {
                render(data.hits);
                Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
                totalPages = Math.ceil(data.totalHits / LIMIT);
                currentPage++;

            } else {
                Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                loadMoreEl.style.display = 'none';
            }
        })
        .catch(error => console.log(error));
};
