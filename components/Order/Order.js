class Order {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
           <div class="order-container">
                <div class="order-counter" onclick="orderPage.handlerOpenShoppingPage();">
                    <span class="icon-count">
						<img src="coffeee/coffee-cup-icon.png">
					</span> 
					<span class="icon-number">
						${count}
					</span> 
                </div>
           </div>
        `
		;

        CONST_ORDER.innerHTML = html;
    }
}

const orderPage = new Order();

// эти 2 строки перемещаем в index.js
// const productsStore = localStorageCoffee.getProducts();
// orderPage.render(productsStore.length);
