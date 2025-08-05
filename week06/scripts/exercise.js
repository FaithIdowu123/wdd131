



const exercises = [
    {
        title: "Kids' Active Start",
        age: "6-12",
        focus: "Fun, coordination, endurance",
        weeklygoal: "≥ 60 minutes/day moderate to vigorous activity",
        image: "images/6-12.webp",
        monWedFri: "Tag games, cycling, swimming (45–60 min)",
        tuesThurs: "Jump rope, hopscotch, obstacle course (30 min)",
        weekend: "Family hikes, dance sessions, playground time (60+ min)"
    },
    {
        title: "Teen Strength & Movement",
        age: "13–17",
        focus: "Growth support, bodyweight strength, flexibility",
        weeklygoal: "60 minutes/day activity, 3x/week strength training",
        image: "images/13-17.webp",
        monWedFri: "Calisthenics (push-ups, squats, planks), sports practice (60+ min)",
        tuesThurs: "Yoga or flexibility flow + short HIIT (30–45 min)",
        weekend: "Bike ride, group sport, fun run (60+ min)"
    },
    {
        title: "Young Adult Fitness Foundation",
        age: "18–35",
        focus: "Full-body fitness, metabolism, body composition",
        weeklygoal: "150 min moderate or 75 min vigorous aerobic + 2x strength training",
        image: "images/18-35.webp",
        monWedFri: "Cardio (30 min run or HIIT), Mobility + Core (Yoga/Pilates), Strength (Push-pull split or class)",
        tuesThurs: "Strength (Full-body dumbbell or gym), Cardio (HIIT or cycling)",
        weekend: "Long walk, hike, or swim (45–60 min)"
    },
    {
        title: "Midlife Active Vitality",
        age: "36–55",
        focus: "Heart health, mobility, muscle retention",
        weeklygoal: "150–300 min aerobic + 2x strength training + flexibility",
        image: "images/36-55.webp",
        monWedFri: "Brisk walk, cycling, or elliptical (30–45 min)",
        tuesThurs: "Strength (moderate weights + functional moves)",
        weekend: "Group class, hike, or swim, Stretching, yoga, or Tai Chi"
    },
    {
        title: "Healthy Aging Movement Plan",
        age: "56+",
        focus: "Joint health, balance, fall prevention, light strength",
        weeklygoal: "150 min aerobic + 2x/week strength + balance training",
        image: "images/56.webp",
        monWedFri: "Low-impact cardio (walk, aqua aerobics) (30 min)",
        tuesThurs: "Chair strength or resistance bands",
        weekend: "Tai Chi, balance drills, stretching, Rest or nature walk"
    }
];







createExerciseCards(exercises);

function createExerciseCards(exercises){
    document.querySelector(".exercise").innerHTML = "";
    exercises.forEach(exercise => {
        let card = document.createElement("section");
        let title = document.createElement("h3");
        let age = document.createElement("p");
        let focus = document.createElement("p");
        let goal = document.createElement("p");
        let image = document.createElement("img");
        let regimen = document.createElement("p");
        let monWedFri = document.createElement("p");
        let tuesThur = document.createElement("p");
        let weekend = document.createElement("p");

        title.textContent = exercise.title;
        age.innerHTML = `<strong>Ages: </strong>${exercise.age}`;
        focus.innerHTML = `<strong>Focus: </strong>${exercise.focus}`;
        goal.innerHTML = `<strong>Weekly Goal: </strong>${exercise.weeklygoal}`;
        regimen.innerHTML = `<strong>Sample Weekly Regimen: </strong>`;
        monWedFri.innerHTML = `<strong>Mon/Wed/Fri: </strong>${exercise.monWedFri}`;
        tuesThur.innerHTML = `<strong>Tues/Thurs: </strong>${exercise.tuesThurs}`;
        weekend.innerHTML = `<strong>Weekend: </strong>${exercise.weekend}`;
        image.setAttribute("src", exercise.image);
        image.setAttribute("alt", exercise.title);
        image.setAttribute("loading", "lazy");

        card.appendChild(title);
        card.appendChild(age);
        card.appendChild(focus);
        card.appendChild(goal);
        card.appendChild(image);
        card.appendChild(regimen);
        card.appendChild(monWedFri);
        card.appendChild(tuesThur);
        card.appendChild(weekend);

        
        document.querySelector(".exercise").appendChild(card);
    });
}