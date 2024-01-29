import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, CardContent, CardActionArea } from "@mui/material";
import { Link } from "@remix-run/react";
import { IRecipePreview } from "../utils/Interfaces";

const RecipeCard = (recipe: IRecipePreview) => {
  const { strMeal, strMealThumb, idMeal } = recipe;
  return (
    <Card className="recipe-card">
      <CardActionArea component={Link} to={`recipe/${idMeal}`}>
        <CardMedia image={strMealThumb} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
