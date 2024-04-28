export default function singleMealWindow(win,meal) {
    // win.document.title=`${meal.strMeal}`;
    win.document.head.innerHTML=`
    <title>${meal.strMeal}</title>
    <link rel="stylesheet" href="./mealItem.css">
    <link rel="shortcut icon" href="${meal.strMealThumb}" type="image/x-icon">
    `;
    //Should show information about the meal like its name, photo, instructions, etc (these are must, rest you can add if you want).
    win.document.body.innerHTML=`
    <div class="container">
        <h2 class="itemName">${meal.strMeal}</h2>
        <div class="img-contaner">
            <img src="${meal.strMealThumb}" alt="">
        </div>
        <h2>Instructions :</h2>
        <p class="instructions">${meal.strInstructions}</p>
    </div>
    `;
    // const newWindow=``
};
