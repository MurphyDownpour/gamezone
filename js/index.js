function selectPagination(arg){
	if (arg.classList != "selected-img") {
		var imgPath = "./img/";
		var elems = document.querySelectorAll('.pagination-elements a');
		elems.forEach(function(elem){
			elem.classList.remove('selected-img');
		});
		arg.classList.add('selected-img');
		var img = arg.id.substr(arg.id.length - 1) + ".jpg";
		imgPath += img;
		document.querySelector(".slider-image").src = imgPath;
	}
}

function arrowLeftRight(arg){
	console.log(arg.classList.toString().search("left"));
}