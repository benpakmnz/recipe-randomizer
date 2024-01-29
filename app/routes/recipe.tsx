import { Box } from "@mui/material";
import { Outlet, json } from "@remix-run/react";
import { getCurrentRecipesList, getFavRecipesList } from "~/data/recipe";
import RecipesSideBar from "~/src/components/RecipesSideBar/RecipesSideBar";
import recipeStyles from "~/styles/recipe-styles.css";

const RecipePageLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          px: 6,
        }}
      >
        <RecipesSideBar />
        <Outlet />
      </Box>
    </>
  );
};

export default RecipePageLayout;

export function links() {
  return [{ rel: "stylesheet", href: recipeStyles }];
}

export const loader = async () => {
  const [recipes, recipesFav] = await Promise.all([
    getCurrentRecipesList(),
    getFavRecipesList(),
  ]);
  return json({ recipes, recipesFav });
};
