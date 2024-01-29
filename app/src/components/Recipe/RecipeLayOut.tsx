import { ListItem, Grid, Typography, Avatar, Divider } from "@mui/material";
import { IRecipe } from "~/src/utils/Interfaces";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

const RecipeLayOut = (recipe: IRecipe) => {
  return (
    <ListItem key={recipe.idMeal} sx={{ mb: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h3" component={"h2"}>
            {recipe.strMeal}
            <Divider variant="fullWidth" sx={{ width: "100%" }} />
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeInstructions instructions={recipe.strInstructions} />
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src={recipe.strMealThumb}
            sx={{ width: "100%", height: "unset" }}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default RecipeLayOut;
