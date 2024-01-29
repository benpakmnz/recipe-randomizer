import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "@remix-run/react";
import { IRecipePreview } from "~/src/utils/Interfaces";

const RecipeListItem = (recipe: IRecipePreview) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  return (
    <ListItem key={idMeal} disablePadding divider className="recipe-li">
      <ListItemButton component={Link} to={idMeal}>
        <ListItemIcon>
          <Avatar src={strMealThumb} />
        </ListItemIcon>
        <ListItemText primary={strMeal} />
      </ListItemButton>
    </ListItem>
  );
};

export default RecipeListItem;
