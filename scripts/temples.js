var year = new Date().getFullYear();
document.getElementById("currentyear").textContent = `@ ${year}`;
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
const button = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector("#title");
button.addEventListener("click", () =>{
    navigation.classList.toggle("show");
	button.classList.toggle("show");
    title.classList.toggle("close");
});