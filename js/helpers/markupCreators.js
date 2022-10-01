const markupCreators = {
    playCard: (item) => {
        return `
            <div class="play-card" data-id = "${item.id}">
                <div class="card__image-wrapper">
                    <img class="card__image" src="${item.image}">
                </div>
                <div class="card__item card__header">${item.name}</div>
                <div  class="card__item">${new Date(item.date).toLocaleDateString()}</div>
                <div  class="card__item">${item.price}</div>
                <button class="book__button base-button base-button--primary base-button--secondary">
                Book
                </button>
                <button class="card__delete-button">
                    <i style="font-size:24px" class="fa card__delete-icon">&#xf014;</i>
                </button>
            </div>
        `;
    },
}

export default markupCreators;