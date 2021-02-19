/*CATALOG = [];*/

function render() {
	/* из order.js */
	/*получение количества товаров*/
    const productsStore = localStorageCoffee.getProducts();
	console.log('productsStore: ', productsStore);
	
	/*рендер хедера*/
    orderPage.render(productsStore.length);
	console.log('productsStore.length: ', productsStore.length);
	
	/* из products.js */
	/*рендер продуктов*/
    productsPage.render();
}

/* json на gisthub 
 'https://gist.githubusercontent.com/zyk0/0d72e6e101c7d01f8cddb2967a76a55b/raw/5399ec4f353c00eebd9e79bf15af8d53374ae4f8/catalog.json'
*/

//fetch('server/catalog.json')// локальный json для теста.
fetch('https://gist.githubusercontent.com/zyk0/0d72e6e101c7d01f8cddb2967a76a55b/raw/5399ec4f353c00eebd9e79bf15af8d53374ae4f8/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });
