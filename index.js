const bodyElement=document.querySelector("body");
bodyElement.style.backgroundColor = '#e9e9e9';
const news=document.querySelector(".news");
news.style.backgroundColor = "white";
news.style.maxWidth ="60rem";
const nadpis = document.querySelector("h1");
nadpis.className = "news_title";
nadpis.textContent = "Aktuální novinky";
nadpis.style.color = "brown";
const prvniZprava = document.getElementById("zprava1");
prvniZprava.classList.add("post--main");
const tretiZprava=document.getElementById("zprava3");
document.querySelector("#zprava3 .post__picture").src = "images/zprava3-novy.jpg";