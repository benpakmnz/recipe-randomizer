import { IRecipePreview, IRecipe, IIngredient } from "~/src/utils/Interfaces";

let recipesList: IRecipePreview[] = [];
let recipesFavList: IRecipePreview[] = [];

export async function fetchRecipes(
  ingredient?: string
): Promise<IRecipePreview[]> {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${
        ingredient ?? " "
      }`
    );
    const data = await res.json();
    recipesList = data.meals ?? [];
    return recipesList;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function getCurrentRecipesList(): IRecipePreview[] {
  try {
    return recipesList;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function getFavRecipesList(): IRecipePreview[] {
  try {
    return recipesFavList;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getRecipe(id: string): Promise<IRecipe[]> {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    const { meals } = data;
    meals.map((recipeItem: { [x: string]: any }) => {
      recipeItem.strInstructions = handleInstruction(
        recipeItem.strInstructions
      );

      recipeItem.ingredients = handleIngredients(recipeItem);
    });
    return meals;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const handleInstruction = (instructions: string) => {
  return instructions.split(".").filter((str: any) => !/^\s*\d*\s*$/.test(str));
};

const handleIngredients = (recipeItem: { [x: string]: any }) => {
  const ingredientsList: IIngredient[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientName = recipeItem[`strIngredient${i}`];
    const ingredientMeasure = recipeItem[`strMeasure${i}`];

    if (ingredientName && ingredientMeasure) {
      const ingredient: IIngredient = {
        name: ingredientName,
        measure: ingredientMeasure,
      };
      ingredientsList.push(ingredient);
    }
  }
  return ingredientsList;
};
