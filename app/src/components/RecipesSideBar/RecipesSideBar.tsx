import { Divider, Drawer, Grid, Toolbar } from "@mui/material";
import RecipesForm from "~/src/components/RecipesForm";
import RecipesSideBarTabs from "./RecipesSideBarTabs";

const RecipesSideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 400, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Grid container p={4}>
        <RecipesForm />
      </Grid>
      <Divider />
      <RecipesSideBarTabs />
    </Drawer>
  );
};

export default RecipesSideBar;
