export {formElSubmit}

const searchInput = document.getElementById('search-input');
let searchQuery = '';

const formElSubmit = (event) => {
    galleryEl.innerHTML = '';
    event.preventDefault();
    page = 1;
    searchQuery = searchInput.value;
    fetchImages();
    loadMoreEl.style.display = 'none';
    loadMoreEl.style.textAlign = 'center';
    loadMoreEl.style.margin = '0 auto';
    loadMoreEl.style.display = 'block';
};