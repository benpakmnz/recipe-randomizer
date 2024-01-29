import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import RecipeCard from "~/src/components/RecipeCard";
import { useLoaderData } from "@remix-run/react";
import { getCurrentRecipesList } from "~/data/recipe";
import { IRecipePreview } from "~/src/utils/Interfaces";
import RecipesForm from "~/src/components/RecipesForm";
import theme from "~/src/theme";
import homeStyles from "~/styles/home-styles.css";

export default function Index() {
  const recipes = useLoaderData<IRecipePreview[]>();
  const mainColor = theme.palette.primary.main;
  return (
    <Container
      sx={{
        textAlign: "center",
        my: 5,
      }}
      maxWidth="md"
    >
      <Typography
        variant="h2"
        align="center"
        color={mainColor}
        component={"h1"}
        mb={4}
      >
        Discover your next breakfast, dinner, or lunch effortlessly.
      </Typography>
      <RecipesForm />
      <Typography component={"h3"} variant="h5" mt={3}>
        Randomize a dish by choosing your main ingredient or let our culinary
        commanders do the work for you.
      </Typography>
      <Typography color={mainColor} component={"h2"} variant="h5" mt={3}>
        Elevate your dining experience with just a click!
      </Typography>

      <Grid
        container
        maxWidth="md"
        mt={5}
        spacing={4}
        sx={{ justifyContent: recipes.length >= 4 ? "left" : "center" }}
      >
        {recipes.map((recipe) => (
          <Grid item key={recipe.idMeal} xs={12} sm={6} md={4}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}

export const loader = async () => {
  const recipes = await getCurrentRecipesList();
  return recipes;
};
