const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

let filter=searchInput.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h2").textContent.toLowerCase();

if(title.includes(filter))
card.style.display="block";

else
card.style.display="none";

});

});
