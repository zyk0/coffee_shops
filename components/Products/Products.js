class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd =    'Заказать';
        this.labelRemove = 'Отказаться';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageCoffee.putProducts(id);
        
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        orderPage.render(products.length);
    }

    render() {
        const productsStore = localStorageCoffee.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += 
			`
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                       Цена: ${price} <strong>&#8381;</strong>
                    </span>
                    <button class="products-element__btn${activeClass}" 
					onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `
			;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        CONST_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();

// перемещаем в index.js
//productsPage.render();