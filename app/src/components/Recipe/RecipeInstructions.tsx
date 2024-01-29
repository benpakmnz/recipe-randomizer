import { Typography, List, ListItem, ListItemText } from "@mui/material";

const RecipeInstructions = ({ instructions }: { instructions: string[] }) => {
  return (
    <>
      <Typography variant="h4" component={"h3"} mt={4}>
        Recipe
      </Typography>
      <List className="instructions-ol">
        {instructions.map((step, idx) => (
          <ListItem key={idx} divider>
            {step}.
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default RecipeInstructions;
