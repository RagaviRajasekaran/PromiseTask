
document.addEventListener("DOMContentLoaded", function () {
    const setupElement = document.getElementById("setup");
    const punchlineElement = document.getElementById("punchline");
    const getJokeButton = document.getElementById("get-joke");

    const fetchJoke = () => {
        setupElement.textContent = "Loading...";
        punchlineElement.textContent = "";

        fetch("https://official-joke-api.appspot.com/jokes/programming/random")
            .then((res) => res.json())
            .then((result) => {
                const joke = result[0];
                setupElement.textContent = joke.setup;
                punchlineElement.textContent = joke.punchline;
            })
            .catch((err) => {
                setupElement.textContent = "An error occurred while fetching the joke.";
                console.error(err);
            });
    };

    getJokeButton.addEventListener("click", fetchJoke);

    
    fetchJoke();
});
