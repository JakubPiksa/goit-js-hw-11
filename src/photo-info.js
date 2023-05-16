export {createInfoItem}


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
