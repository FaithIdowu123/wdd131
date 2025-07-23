const home = document.querySelector("#home");
const old = document.querySelector("#old");
const New = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8456-thumb.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 70000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-3391.jpg"
  }
];

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


createTemplecards(temples);

home.addEventListener("click", () => {
    createTemplecards(temples);
});

old.addEventListener("click", () => {
    let filteredtemples = [];
    temples.forEach(temple => {
        let parts = temple.dedicated.split(",");
        
        let number = parseInt(parts[0])
        if (number < 1900){
            console.log(parts[0])
            filteredtemples.push(temple);
        };
    createTemplecards(filteredtemples);
    });   
});

New.addEventListener("click", () => {
    let filteredtemples = [];
    temples.forEach(temple => {
        let parts = temple.dedicated.split(",");
        
        let number = parseInt(parts[0])
        if (number > 2000){
            console.log(parts[0])
            filteredtemples.push(temple);
        };
    createTemplecards(filteredtemples);
    });
});

large.addEventListener("click", () => {
    filteredtemples = temples.filter(temple => temple.area > 90000)
    createTemplecards(filteredtemples);
});

small.addEventListener("click", () => {
    filteredtemples = temples.filter(temple => temple.area < 10000)
    createTemplecards(filteredtemples);
});

function createTemplecards(temples){
    document.querySelector("#gallery").innerHTML = ""; 
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");
        console.log(temple.location)


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector("#gallery").appendChild(card);
    });
    
};