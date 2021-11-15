const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2021,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2020,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2015,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
];

function age(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  if(age === 1) {
    return `${age} year old`
  }
  else if(age === 0) {
    return "baby"
  }
  else {
    return `${age} years old`
  }
}

function foods(foods) {
  return `
    <h4>Favorite</h4>
    <ul class="foods-list">
    ${foods.map(food=>`<li>${food}</li>`).join("")}
    </ul>
  `
}
function template(pet) {
  return `
    <div class="animal">
      <img class="pet-photo" src = ${pet.photo} />
      <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
      <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
      ${pet.favFoods ? foods(pet.favFoods): ""}
    </div>
  `
}
document.getElementById("app").innerHTML = `
    <h1 class='app-title'>Pets (${petsData.length}results)</h1>
    ${petsData.length ? petsData.map(template).join("") : "No data"}
    <p class='footer'>These ${
      petsData.length
    } pets were added recently. Check back soon for updates. </p>
  `;
