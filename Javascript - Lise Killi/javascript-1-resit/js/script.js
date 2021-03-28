const setupContainer = document.querySelector(".joke setup");

const url = "https://official-joke-api.appspot.com/random_joke";

async function randomJoke () {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    setupContainer.innerHTML = `<h2>${json.joke}</h2>`;
}

randomJoke(); 