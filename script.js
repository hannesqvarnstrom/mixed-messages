async function fetchJoke() {
  const req = await fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then((resp) => resp.json())
    .then((json) => {
      showJoke(json);
    })
    .catch((err) => console.log(err));
}
fetchJoke();
const setupDiv = document.querySelector("#setup");
const punchlineDiv = document.querySelector("#punchline");
const timer = document.querySelector("#timer");
const button = document.querySelector("#reset");

function showJoke(obj) {
  button.disabled = true;
  setupDiv.textContent = obj.setup;
  timer.textContent = "3";
  setTimeout(function () {
    timer.textContent = "2";
    setTimeout(function () {
      timer.textContent = "1";
      setTimeout(function () {
        punchlineDiv.textContent = obj.punchline;
        timer.textContent = "";
        button.disabled = false;
      }, 1000);
    }, 1000);
  }, 1000);
}

function reset() {
  setupDiv.textContent = "";
  punchlineDiv.textContent = "";
  fetchJoke();
}
