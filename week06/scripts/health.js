var year = new Date().getFullYear();
document.querySelector("#year").textContent = `@ ${year}`;
document.querySelector("#lastmodified").textContent = "Last modified: "+ document.lastModified;

const button = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");


button.addEventListener("click", function(){
    button.classList.toggle("show");
    navigation.classList.toggle("show");
});





