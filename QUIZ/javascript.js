//efek1
const textIndex = ['Trunojoyo University', 'System Information 21'];
let count = 0;
let Index = 0;
let currentTxt = '';
let words = '';

(function efek(){

	if(count == textIndex.length){
		count = 0;
	}

	currentTxt = textIndex[count];

	words = currentTxt.slice(0, ++Index);
	document.querySelector('.efek1').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		Index = 0;
	}

	setTimeout(efek, 300);

})();
//Show more Button
const textbutton = document.querySelector(".text-button");
const text = document.querySelector(".text");
textbutton.addEventListener("click",(e) =>{
    text.classList.toggle("show-more");
    if(textbutton.innerText == "Read More"){
        textbutton.innerText = "Read Less";
    }else{
        textbutton.innerText = "Read More";
    }
});

//slide image
var slideIndex = 1;
    showSlide(slideIndex);
function nextslide(n){
    showSlide(slideIndex += n);
}
function dotslide(n){
    showSlide(slideIndex = n);
}
function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dot = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        
        dot[i].className = dot[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dot[slideIndex - 1].className += " active";
}