const searchForMeal = () => {
    const searchText = document.getElementById("searchMeal").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((meals) => displayMeal(meals.meals));
};

const displayMeal = (meals) => {
    meals.forEach((meal) => {
        const mealsDiv = document.createElement("div");
        mealsDiv.className = "box";
        const mealInfo = `
            <img src="${meal.strMealThumb}" onclick="displayIngredients(${meal.strIngredient})">
            <h3>${meal.strMeal}</h3>
            `;
        mealsDiv.innerHTML = mealInfo;
        foodInfo.appendChild(mealsDiv);
    });
};
const displayIngredients = (ingredients) => {
    const ingredient = document.getElementById("ingredient-list");
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then((res) => res.json())
        .then((meals) => displayIngredientInfo(meals.meals[0]));
}
const displayIngredientInfo = () => {
    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        const ingredientList = `
            < img src = "${meal.strMealThumb}" >
               < h1 >${ meal.strMeal } < /h1> 
               <h3 > Ingredients < /h3> <
               <p>${meal.strIngredient1}</p> 
               <p> ${meal.strIngredient2} </p> 
               <p> ${meal.strIngredient3} </p> 
               <p> ${meal.strIngredient4} </p> 
               <p> ${meal.strIngredient5} </p> 
               <p> ${meal.strIngredient6} </p> 
               <p> ${meal.strIngredient7} </p> 
               <p> ${meal.strIngredient8} </p> 
               <p> ${meal.strIngredient9} </p> 
               <p> ${meal.strIngredient10} </p>`

        li.innerHTML = ingredientList;
        ingredient - list.appendChild(li);
    });

}