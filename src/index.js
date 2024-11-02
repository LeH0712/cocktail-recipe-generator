function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d0333349394fbbea5t3609f61c8982o3";
  let prompt = `User instructions: Generate a cocktail recipe and instructions with ${instructionsInput.value}`;
  let context =
    "You are a cocktail recipe expert and have knowledge about every cocktail ingredient. Your mission is to generate a simple cocktail recipe in basic HTML and seperate each line. Do not write the word HTMl in the output. Make sure to follow the user instructions. Only include the name of the recipe and the list of ingredients and the instructions at the bottom";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a cocktail recipe with ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
