import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const formEl = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const galleryEl = document.getElementById('image-gallery');
const loadMoreEl = document.getElementById('load-more');
const API_KEY = '36429050-2dd6aecce9383c2193efec34d';
const API_URL = 'https://pixabay.com/api/?';

let searchQuery = '';
let currentPage = 1;
let totalPages = 0;
let limit = 40;

const createSearchParams = () => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: limit,
  });

  return params.toString();
};

const createInfoItem = (label, value) => {
  const itemEl = document.createElement('div');
  itemEl.classList.add('info-item');

  const labelEl = document.createElement('span');
  labelEl.classList.add('label');
  labelEl.textContent = label;

  const valueEl = document.createElement('span');
  valueEl.classList.add('value');
  valueEl.textContent = value;

  itemEl.append(labelEl, valueEl);

  return itemEl;
};

const formElSubmit = (event) => {
  event.preventDefault();
  //galleryEl.innerHTML = '';
  currentPage = 1;
  searchQuery = searchInput.value;
  loadMoreEl.style.display = 'none';
  loadMoreEl.style.textAlign = 'center';
  loadMoreEl.style.margin = '0 auto';
  loadMoreEl.style.display = 'block';
  fetchImages();

  console.log(formElSubmit);

};

const fetchImages = () => {
  const URL = API_URL + createSearchParams();

  axios
    .get(URL)
    .then((response) => {
      const data = response.data;

      if (data.totalHits > 0) {
        render(data.hits);
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        totalPages = Math.ceil(data.totalHits / limit);
        currentPage++;

        if (currentPage <= totalPages) {
          loadMoreEl.style.display = 'block';
        } else {
          loadMoreEl.style.display = 'none';
        }
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        loadMoreEl.style.display = 'none';
      }
    })
    .catch((error) => console.log(error));
  
  console.log(fetchImages)
  
};



const render = (hits) => {
  //galleryEl.innerHTML = '';
  hits.forEach((hit) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('photo-card');

    const imageLinkEl = document.createElement('a');
    imageLinkEl.classList.add('img-link');
    imageLinkEl.href = hit.webformatURL;
    imageLinkEl.title = hit.tags;

    const imageEl = document.createElement('img');
    imageEl.src = hit.webformatURL;
    imageEl.alt = hit.tags;
    imageEl.loading = 'lazy';
    imageEl.classList.add('photo-image');

    const infoEl = document.createElement('div');
    infoEl.classList.add('info');

    const likesEl = createInfoItem('Likes', hit.likes);
    const viewsEl = createInfoItem('Views', hit.views);
    const commentsEl = createInfoItem('Comments', hit.comments);
    const downloadsEl = createInfoItem('Downloads', hit.downloads);

    imageLinkEl.appendChild(imageEl);
    cardEl.appendChild(imageLinkEl);

    infoEl.append(likesEl, viewsEl, commentsEl, downloadsEl);

    cardEl.append(infoEl);
    galleryEl.append(cardEl);

    new SimpleLightbox('.gallery a', {});

    console.log(render);

  });
};

const showMorePhotos = async () => {
  currentPage++;
  console.log(currentPage, totalPages);
  try {
    if (currentPage > totalPages) throw new Error("Reached the end of search results.");
    fetchImages();
  } catch (error) {
    Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
  }
  
  console.log(showMorePhotos);

};

formEl.addEventListener('submit', formElSubmit);

loadMoreEl.addEventListener('click', (event) => {
  event.preventDefault();
  loadMore();
});

const loadMore = () => {
  showMorePhotos();
};


