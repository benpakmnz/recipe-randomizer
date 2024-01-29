import { Grid, Typography, Paper, Avatar } from "@mui/material";
import { IIngredient } from "~/src/utils/Interfaces";

const RecipeIngredients = ({ ingredients }: { ingredients: IIngredient[] }) => {
  return (
    <>
      <Typography variant="h4" component={"h3"}>
        Ingredients
      </Typography>
      <Grid container spacing={3}>
        {ingredients.map((ing, idx) => (
          <Grid item xs={4} key={`${ing.name}-${idx}`}>
            <Paper variant="outlined" square>
              <Grid container p={1} spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <Avatar
                    src={`https://www.themealdb.com/images/ingredients/${ing.name}.png`}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body2">{ing.measure}</Typography>
                  <Typography variant="h6">{ing.name}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecipeIngredients;
