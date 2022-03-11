export const ApiIngredientsDrinks = async (ingredient) => {
  const linkIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(linkIngredient);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return error;
  }
};

export const ApiDrinksName = async (names) => {
  const linkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${names}`;
  try {
    const response = await fetch(linkName);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return error;
  }
};

export const ApiDrinksFirstLetter = async (first) => {
  const linkFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${first}`;
  try {
    const response = await fetch(linkFirstLetter);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return error;
  }
};

export const ApiCategoryDrink = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.drinks);
    return data.drinks;
  } catch (error) {
    return error;
  }
};
