import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import "./index.css";
import axios from "axios";


const formEl = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const galleryEl = document.getElementById('image-gallery');
const loadMoreEl = document.getElementById('load-more');
const API_KEY = '36429050-2dd6aecce9383c2193efec34d';
const API_URL = 'https://pixabay.com/api/'
const LIMIT = 40;
const URL = `https://pixabay.com/api/?${createSearchParams()}`

// kontrola paginacji i zapytań
let querySearch = '';
let currentPage = 1;
let totalPages = 0;


//parametry wyszukiwanych obrazów

const createSearchParams = () => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: currentQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: LIMIT,
  });
  
  return params.toString();
};

console.log(createSearchParams)
  

// funkcja wyszukująca obrazy

function fetchImages() {
  
  axios.get(URL)
  .then(response => {
    const data = response.data;
      if (parseInt(data.totalHits) > 0) {
        render(data.hits);
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    })
    .catch(error => console.log(error));
}

console.log(fetchImages)

const renderImages = (images) => {
    galleryEl.innerHTML = '';
  
    images.forEach(image => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('photo-card');
    
        const imageEl = document.createElement('img');
        imageEl.src = image.webformatURL;
        imageEl.alt = image.tags;
        imageEl.loading = 'lazy';
    
        const infoEl = document.createElement('div');
        infoEl.classList.add('info');
    
        const likesEl = createInfoItem('Likes', image.likes);
        const viewsEl = createInfoItem('Views', image.views);
        const commentsEl = createInfoItem('Comments', image.comments);
        const downloadsEl = createInfoItem('Downloads', image.downloads);
    
        infoEl.append(likesEl, viewsEl, commentsEl, downloadsEl);
    
        cardEl.append(imageEl, infoEl);
        galleryEl.append(cardEl);
    });
    
};