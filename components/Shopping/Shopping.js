class Shopping {
    handleClear() {
        CONST_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageCoffee.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">&#8226; ${name}</td>
                        <td class="shopping-element__price">${price} &#8381; </td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
				<h3 class="shopping-element__name">Заказ</h3>
                <table>
                    ${htmlCatalog}
					
                    <tr>
                        <td class="shopping-element__name">Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog} &#8381; </td>
                    </tr>
                </table>
            </div>
        `;
        CONST_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
