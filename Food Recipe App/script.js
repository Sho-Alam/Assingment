const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");


// Event listener
searchBtn.addEventListener("click", () =>{
    let searchInput = document.getElementById("search-input").value.trim() 
   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
   .then(response => response.json())
   .then(data => {
    let html = '';
if(data.meals){
    data.meals.forEach(meal => {
        html += `
        <div class="meal-item" data-id = "${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="" />
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
            </div>
        `
    });
  }else{
    html = `<h4>Sorry we didn't find any meal</h4>`
}
    mealList.innerHTML = html;
   })
})