import {
  Box,
  Card,
  Grid,
  List,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { IRecipe } from "~/src/utils/Interfaces";
import RecipeListItem from "./RecipeListItem";
import { useState } from "react";

const RecipesSideBarTabs = () => {
  const { recipes, recipesFav } = useLoaderData<{
    recipes: IRecipe[];
    recipesFav: IRecipe[];
  }>();

  const [value, setValue] = useState("RECENT");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabPanel = value === "RECENT" ? recipes : recipesFav;

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          indicatorColor="primary"
          textColor="inherit"
          value={value}
          variant="standard"
          onChange={handleChange}
        >
          <Tab label="Recent Searches" value={"RECENT"} />
          <Tab label="Favorites" value={"FAV"} />
        </Tabs>
      </Box>
      {tabPanel.length > 0 ? (
        <List sx={{ px: 1, overflow: "auto" }}>
          {tabPanel.map((recipe) => (
            <RecipeListItem {...recipe} />
          ))}
        </List>
      ) : (
        <Grid container justifyContent="center" mt={3}>
          <Typography variant="h6">No Recpies has been added yet...</Typography>
        </Grid>
      )}
    </>
  );
};

export default RecipesSideBarTabs;
