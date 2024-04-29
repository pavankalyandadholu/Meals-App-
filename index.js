import { data, fetchData, favouriteMealsData } from "./meals.js";
import singleMealWindow from "./singleMeal.js";
// Variable Declaration
const inputEl = document.getElementById("takeInput");
const searchBtn = document.getElementById("searchBtn");
const displayMealsEl = document.querySelector(".displayMeals");
const fetchingDataInformationEl = document.querySelector(".fetching-data h2");
const serachMealDataEl = document.querySelector(".serachMealData");

//Functions
function showFavoritesDisplayfunciton() {
  const favouriteMealsEl = document.createElement("button");
  favouriteMealsEl.textContent = "Show Favourite Meals";
  favouriteMealsEl.classList.add("favouriteMealsBtn");
  const fetchingData = document.querySelector(".fetching-data");
  fetchingData.insertAdjacentElement("beforebegin", favouriteMealsEl);
  favouriteMealsEl.addEventListener("click", () => {
    const favariteData = JSON.parse(localStorage.getItem("likedMeals"));
    serachMealDataEl.style.display = "none";
    fetchingDataInformationEl.textContent=''

    displayMealsEl.textContent = "";
    if (favariteData.length != 0) {
      favariteData.map((meals) => {
        getMealCard(meals.meal);
      });
    } else {
      //serachMealData
      const noItemInfavList = document.createElement("div");
      noItemInfavList.classList.add("serachMealData");
      noItemInfavList.innerHTML = `<h2> No items are add ...</h2>`;
      displayMealsEl.appendChild(noItemInfavList);
    }
  });
}
showFavoritesDisplayfunciton();
// Add event listner
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (inputEl.value === "") return;
    const userInput = inputEl.value;
    inputEl.value = "";
    displayMealsEl.textContent = "";
    fetchingDataInformationEl.style.display = "block";
  fetchingDataInformationEl.textContent=`Fetching Data ....`;

    serachMealDataEl.style.display = "none";
    fetchAndDisplayInputMeals(userInput);
  }
});
searchBtn.addEventListener("click", () => {
  if (inputEl.value === "") return;
  const userInput = inputEl.value;
  inputEl.value = "";
  displayMealsEl.textContent = "";
  fetchingDataInformationEl.style.display = "block";
  fetchingDataInformationEl.textContent=`Fetching Data ....`;
  serachMealDataEl.style.display = "none";
  fetchAndDisplayInputMeals(userInput);
});

// For getting Meal Cards

function getMealCard(meal) {
  const mealCardDiv = document.createElement("div");
  mealCardDiv.classList.add("mealCard");
  //class="addFavourate"
  mealCardDiv.innerHTML = `<div class="addOrRemove">
<button > &#10084;</button>
<button class="removeFavourate">&#128465;</button>
</div> 
<div class="openMeal">
<div class="imageContainer">
<img src=" ${meal.strMealThumb}" alt="">
</div>
<div class="mealDetails">
<h4>${meal.strMeal}</h4>
</div> </div> `;
  const likeBtn = mealCardDiv.firstElementChild.firstElementChild;
  const openMeal = mealCardDiv.lastElementChild;
  // To open a new tab with meal Data;
  openMeal.addEventListener("click", (e) => {
    // let url=e.view.location.href.split('/');
    // url=url.splice(0,url.length-1).join('/');
    // window.open(`${url}/meal.html`,'_blank');
    const singleMealWin = window.open("", "_blank");
    singleMealWindow(singleMealWin, meal);
  });
  favouriteMealsData.find((mealItem) => {
    if (mealItem.meal.idMeal === meal.idMeal) {
      likeBtn.classList.add("addFavourate");
    }
    // console.log(mealItem.meal);
  });
  const removeBtn = mealCardDiv.firstElementChild.lastElementChild;
  if (likeBtn)
    likeBtn.addEventListener("click", () => {
      if (!likeBtn.classList.contains("addFavourate")) {
        likeBtn.classList.add("addFavourate");
        favouriteMealsData.push({ meal });
        localStorage.setItem("likedMeals", JSON.stringify(favouriteMealsData));
      }
    });
  removeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("addFavourate")) {
      likeBtn.classList.remove("addFavourate");
      for (let index in favouriteMealsData) {
        if (favouriteMealsData[index].meal.idMeal === meal.idMeal) {
          favouriteMealsData.splice(index, 1);
          localStorage.setItem(
            "likedMeals",
            JSON.stringify(favouriteMealsData)
          );
        }
      }
    }
  });
  // mealCardDiv.addEventListener('click',()=>{
  // window.location.href='/'
  // })
  displayMealsEl.appendChild(mealCardDiv);
}

function fetchAndDisplayInputMeals(input) {
  fetchData(input).then(() => {
    // console.log(data);
    if (data.meals != null) {
      //   displayMealsEl.appendChild(favouriteMealsEl);
      data.meals.map((meal) => {
        getMealCard(meal);
      });
      fetchingDataInformationEl.style.display = "none";
    } else {
      fetchingDataInformationEl.textContent = "No item Found !";
    }
  });
}

// await fetchData('egg');
//   const mealCard =getMealCard(data.meals[0]);
//   displayMealsEl.innerHTML+=mealCard;
