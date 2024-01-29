import { List } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/server-runtime";
import { getRecipe } from "~/data/recipe";
import RecipeLayOut from "~/src/components/Recipe/RecipeLayOut";
import { IRecipe } from "~/src/utils/Interfaces";

export default function Recipe() {
  const recipes = useLoaderData<IRecipe[]>();
  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeLayOut key={recipe.idMeal} {...recipe} />
      ))}
    </List>
  );
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.recipeId) {
    throw new Response("Not Found", { status: 404 });
  }
  const recipe = await getRecipe(params.recipeId);
  return recipe;
};
