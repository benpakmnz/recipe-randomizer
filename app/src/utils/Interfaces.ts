export interface DocumentProps {
  children: React.ReactNode;
  title: string;
}

export interface IRecipePreview {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface IRecipe extends IRecipePreview {
  strInstructions: string[];
  ingredients: IIngredient[];
}

export interface IIngredient {
  name: string;
  measure: string;
}
