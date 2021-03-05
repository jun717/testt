document.querySelector('.container .nav').addEventListener('mouseover', function(event){
	if(event.target==this){
		return;
	}
	for(i=0; i<document.querySelectorAll('.container .nav div').length; i++){
		if(event.target==document.querySelectorAll('.container .nav div')[i]){
			return
		}
	}
	if(event.target==document.querySelectorAll('.container .nav div a')[0]){
		document.querySelector('body').style.backgroundImage = event.target.dataset.image;
	}
	else if(event.target==document.querySelectorAll('.container .nav div a')[1]){
		document.querySelector('body').style.backgroundImage = event.target.dataset.image;
	}
	else if(event.target==document.querySelectorAll('.container .nav div a')[2]){
		document.querySelector('body').style.backgroundImage = event.target.dataset.image;
	}
	else if(event.target==document.querySelectorAll('.container .nav div a')[3]){
		document.querySelector('body').style.backgroundImage = event.target.dataset.image;
	}
})


document.querySelector('.container .nav').addEventListener('mouseout', function(event){
	if(event.target==this){
		return
	}
	for(i=0; i<document.querySelectorAll('.container .nav div').length; i++){
		if(event.target==document.querySelectorAll('.container .nav div')[i]){
			return
		}
	}
	document.querySelector('body').style.backgroundImage='url(images/portrait-initial.jpg)'
})