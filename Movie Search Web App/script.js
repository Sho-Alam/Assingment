const searchbtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchbtn.addEventListener("click", () => {
  const inputBtn = document.getElementById("search-inp").value.trim();
  const finalURL = `https://www.omdbapi.com/?s=${inputBtn}&apikey=c9466890`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.Search) {
        data.Search.forEach((element) => {
          result.innerHTML += `
      <div class="container-box">
      <div class="movie-list" id="movie-list">
        <img src="${element.Poster}">
        <h2>${element.Title}</h2>
        <button>Watch Now</button>
      </div>
    </div>
      `;
        });
      } else if (inputBtn.length == 0) {
        result.innerHTML = `<h4>Input can't be empty</h4>`;
      } else {
        result.innerHTML = `<h4>Please enter a valid name</h4>`;
      }
    });
});
