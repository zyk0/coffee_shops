let openmodal  = document.getElementById('openmodal');
let closemodal = document.getElementById('close');
let modal      = document.getElementById('modal');

// показ модалки
openmodal.addEventListener('click', () => modal.classList.add('show-modal', console.log(' add show-modal')));

// сокрытие модалки
closemodal.addEventListener('click', () => modal.classList.remove('show-modal', console.log(' remove show-modal')));

// закрыть модалку по клику за пределами окна 
window.addEventListener('click', function(event){
	   
	if(event.target == modal){
		  return modal.classList.remove('show-modal')
	  }else{
		  return false
	}
	// если применить тернарный, то будет лаконечнее: 
	// event.target == modal ? modal.classList.remove('show-modal') : false
});
