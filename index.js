function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "7e77fbbbab91e5504tfaaa75643of118";
  let prompt = `User instructions: Generate a English Poem about Love ${instructionsInput.value}`;
  let context =
    "You are a love poem expert and love to write short poems. I want you to generate a four line poem in basic HTML. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem and NOT at the beginning ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}
`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a English poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventlistener("submit", generatePoem);
