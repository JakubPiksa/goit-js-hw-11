export { render }

const render = (hits) => {
    galleryEl.innerHTML = '';
    hits.forEach(hit => {
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

        cardEl.append(imageEl, infoEl);
        galleryEl.append(cardEl);
    });

};