year = new Date().getFullYear();
document.querySelector("#year").textContent = `@ ${year}`;
document.querySelector("#lastmodified").textContent = "Last Modified: " + document.lastModified;
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.innerHTML = `<strong>Number of Visits: ${numVisits}`;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);