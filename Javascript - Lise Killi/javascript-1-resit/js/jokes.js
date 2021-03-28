const url = "https://official-joke-api.appspot.com/random_ten";

const resultsContainer = document.querySelector(".results");


async function fiveJokes() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        const jokes = json.data;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < jokes.length; i++) {
            
            if (i === 5) {
                break;
            }

            resultsContainer.innerHTML += `<div class="card">${jokes[i].text}</div>`;
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error has occured when calling the API");
    }
}

fiveJokes();



