

const nutritions = [
    {
        title: "Eat a Rainbow",
        image: "images/rainbow.webp",
        why: "Different colored fruits and vegetables contain unique vitamins, antioxidants, and phytochemicals.",
        how: ["Include at least 3 colors in every meal (e.g., spinach, red bell peppers, and carrots).", "Try purple cabbage, berries, and sweet potatoes for variety."]
    },
    {
        title: "Prioritize Whole Foods",
        image: "images/whole_foods.webp",
        why: "Whole foods (unprocessed) are nutrient-dense and help reduce inflammation.",
        how: ["Choose oats over sugary cereals, brown rice over white rice, and fresh fruits over juices.", "Shop the outer aisles of the grocery store where fresh produce and protein are stocked."]
    },
    {
        title: "Stay Hydrated",
        image: "images/hydrate.webp",
        why: "Proper hydration boosts metabolism, energy levels, and brain function.",
        how: ["Aim for 8 glasses (2 liters) of water per day (more if active or in heat).", "Add lemon, cucumber, or mint to flavor your water naturally."]
    },
    {
        title: "Practice Portion Control",
        image: "images/portion.webp",
        why: "Overeating even healthy food can lead to weight gain and fatigue.",
        how: ["Use smaller plates, avoid eating directly from packages.", "Follow the “half-plate veggies, quarter lean protein, quarter whole grains” method."]
    },
    {
        title: "Include Lean Protein in Every Meal",
        image: "images/protein.webp",
        why: "Protein builds muscle, keeps you full, and supports metabolism.",
        how: ["Examples: grilled chicken, tofu, fish, beans, eggs, Greek yogurt.", "Snack on nuts or boiled eggs instead of chips or cookies."]
    },
    {
        title: "Choose Healthy Fats",
        image: "images/healthyfat.webp",
        why: "Healthy fats support heart health, hormone balance, and brain function.",
        how: ["Use olive oil instead of butter, eat avocados, nuts, and fatty fish like salmon.", "Limit trans fats (found in fried and packaged foods)."]
    },
    {
        title: "Stick to Regular Meal Times",
        image: "images/clock.webp",
        why: "Eating consistently balances blood sugar, reduces overeating, and supports digestion.",
        how: ["Eat every 3–4 hours: breakfast, lunch, dinner + 1–2 light snacks.", "Avoid skipping meals or eating late at night."]
    }
];


createNutritionCards(nutritions);


function createNutritionCards(nutritions){
    document.querySelector(".nutrition").innerHTML = "";
    nutritions.forEach(nutrition => {
        let card = document.createElement("section");
        let title = document.createElement("h3");
        let image = document.createElement("img");
        let why = document.createElement("p")
        let hows =  document.createElement("p");

        let h = nutrition.how;

        title.textContent = nutrition.title;
        why.textContent = nutrition.why;
        hows.innerHTML = `<strong>How: </strong>`;
        image.setAttribute("src", nutrition.image);
        image.setAttribute("alt", nutrition.title);
        image.setAttribute("loading", "lazy");

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(why);
        card.appendChild(hows);
        for (let i = 0; i < h.length; i++) {
            let how = document.createElement("p");
            how.textContent = h[i];
            card.appendChild(how);
        }

        document.querySelector(".nutrition").appendChild(card);
    });

}



