fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(data => displayMeal(data.meals));


const displayMeal = meals => {
    console.log(meals);
    const searchDiv = document.getElementById("foodInfo");
    meals.forEach(meal => {
        const mealsDiv = document.createElement('div')
        mealsDiv.className = "box";
        const mealInfo = `
            <img src="${meal.strMealThumb}" onclick="displayMealIngredients('${meal.strMeal}')">
            <h3>${meal.strMeal}</h3>
            `
        mealsDiv.innerHTML = mealInfo;
        foodInfo.appendChild(mealsDiv);
    });
}

// const displayIngredienDetail = strMeal => {
//   // <img src="${meal.strMealThumb}"
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
//         .then(res => res.json())
//         .then(data => displayMealIngredients(meal.strMeal));
// }
    const displayMealIngredients = meal => {

        const mealsDiv = document.getElementById("ingredients");
        mealsDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h1>${meal.strMeal}</h1>
        <h3>Ingredients</h3>
        <p>${meal.strIngredient1}</p>
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        <p>${meal.strIngredient6}</p>
        <p>${meal.strIngredient7}</p>
        <p>${meal.strIngredient8}</p>
        <p>${meal.strIngredient9}</p>
        <p>${meal.strIngredient10}</p>
        `
    }





    // const searchButton = document.getElementById("searchBtn").addEventListener('click');



