function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The Poem will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#Poem-Generator-Form");
poemFormElement.addEventlistener("submit", generatePoem);
