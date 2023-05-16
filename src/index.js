import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import "./index.css";
import axios from "axios";

//poszczególne funckcje importowane 
import { fetchImages } from './fetchImages';
import { createSearchParams } from './queryparams'; //parametry wyszukiwanych obrazów
import { createInfoItem } from './photo-info';
import { formElSubmit } from './form-element';
import { render } from './photo-render';


const formEl = document.getElementById('search-form');

const galleryEl = document.getElementById('image-gallery');
const loadMoreEl = document.getElementById('load-more');
const API_KEY = '36429050-2dd6aecce9383c2193efec34d';
const API_URL = 'https://pixabay.com/api/?'
const LIMIT = 40;
const searchInput = document.getElementById('search-input');


// kontrola paginacji i zapytań

let currentPage = 1;
let totalPages = 0;
let page = 1;
let searchQuery = '';


// wartiości wyszukiwanych obrazów
console.log(createSearchParams);

//funkcja znajdująca obrazy
console.log(fetchImages);



// funkcja tworząca informacje o zdjęciu
console.log(createInfoItem);




// const loadMore()
//                 if (currentPage <= totalPages) {
//                     loadMoreEl.style.display = 'block';
//                 } else {
//                     loadMoreEl.style.display = 'none';
//                 }


//obsługa formularza 
console.log(formElSubmit)
//renderowanie zdjęcia


console.log(render)




//lightbox
const lightbox = new SimpleLightbox('.img-link');

//load more




//obsługa zdarzenia
formEl.addEventListener('submit', formElSubmit);
// loadMoreEl.addEventListener('click', loadMore);
