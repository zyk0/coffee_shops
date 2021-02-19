// const:
const app = document.querySelector("#coffeapi");
const page = Math.floor(Math.random()*100);//рандомная страница запроса 

// fetch api:
const photos = async (page) => {
    const container = document.createElement("div");
    container.setAttribute("class","container");
    app.appendChild(container);
	//настроки запроса
    const settings = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": "563492ad6f91700001000001321e21e1cabd4b67bd71631572692f4d"
        }}
		
	//массив с API-запросами
	let search_request = [
				'coffee cup',
				'coffee mocha',
				'coffee',
				'coffee shop',
				'cappuccino',
				'latte'
				]		

	let value = search_request[Math.floor(Math.random() * search_request.length)];
	//произвольный поисковый запрос из массива search_request
	
	let per_page = 3; //кол-о рез-ов
    //  &per_page=15 количество результатов на страницу, по дефолту: 15
	
    const apiurl = `https://api.pexels.com/v1/search/?page=${page}&per_page=${per_page}&query=${value}`;
	// образец: "https://api.pexels.com/v1/search/?page=2&per_page=10&query=coffee"

    const response = await fetch(apiurl, settings);
		//console.log('response: ', response);
	
    const data = await response.json(); //парсинг json
		//console.log('data: ', data);
		//console.log('data.page: ', data.page); // номер рандомной страницы
	
    const photos = data.photos;
		console.log('data.photos.length: ', data.photos.length);
		console.log('data.photos: ', data.photos);
		//console.log('data.photos: ', data.photos[6]);
		//console.log('id  data.photos: ', data.photos[6].id);
		//console.log('data.photos: ', data.photos[6].src.medium);

    if(response.status >= 200 && response.status < 400){
        photos.forEach(photo => {
            const card = document.createElement("div");
            card.setAttribute("class","card");

            const h6 = document.createElement("h6");
				h6.textContent = photo.photographer; //автор фото
					console.log('photo.photographer: ', h6.textContent);		
				//h6.linkphoto = photo.photographer_url; //url на фото
					//console.log('photo.photographer_url: ', h6.linkphoto);
				avg_color = photo.avg_color; //цвет фото
					console.log('avg_color: ', avg_color);// HEX color
				
		        if(avg_color === '#ffffff'){
					h6.style.color = '#000000';
				}else{
					h6.style.background = avg_color; // цвет бэкграунда карточки 
				}
				
            const img = document.createElement("img");
            img.src = photo.src.medium;
			//img.src = photo.src.large; //само изображение 

            card.appendChild(h6);
            card.appendChild(img);
			img.classList.add("cardimg") //добавить класс cardimg
            container.appendChild(card);
        });
    }else{
		console.log(err);
    }
}

photos(page);