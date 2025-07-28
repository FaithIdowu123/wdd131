year = new Date().getFullYear();
document.querySelector("#year").textContent = `@ ${year}`;
document.querySelector("#lastmodified").textContent = "Last Modified: " + document.lastModified;
const select = document.querySelector("#product"); 



const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];
displayProducts(products)

function displayProducts(products) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.innerHTML = `<span id="label">${product.name}<span>`;
        option.setAttribute("value", product.name);
        select.appendChild(option);
    });
}






