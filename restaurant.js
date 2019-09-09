var navbar=document.querySelector(".navbar");
console.log(navbar);
var navButton=document.querySelector(".collapse-hb");
var collapsed=document.querySelector(".collapsed-choices");
var flyaway=document.querySelector(".fly-away-wrapper");
var newsDropdown=document.querySelector(".news-dropdown");
var newsLink=document.querySelector(".news-link");
console.log(newsDropdown);

newsLink.addEventListener("mouseover",function(){
	newsDropdown.style.display="block";
});
navbar.addEventListener("mouseleave",function(){
	newsDropdown.style.display="none";
})

navButton.addEventListener("click",function(){
	if(collapsed.classList[1]==="collapse-show"){
		collapsed.classList.remove("collapse-show");
	}else{
		collapsed.classList.add("collapse-show");
		console.log(collapsed.classList);
	}	
})

flyaway.addEventListener("click",hide);


function hide(){
	if(collapsed.classList[1]==="collapse-show"){
		collapsed.classList.remove("collapse-show");
	};
}


