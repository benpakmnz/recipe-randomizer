import { Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import { Form, useMatches } from "@remix-run/react";

const RecipesForm = () => {
  const matches = useMatches();
  const { pathname } = matches[matches.length - 1];
  const SubmitBtn = (
    <Button type="submit" variant="contained">
      <img src="/images/dish-finder.svg" />
      {pathname === "/" && (
        <span>
          Randomize
          <br /> a Recipe
        </span>
      )}
    </Button>
  );
  return (
    <Form
      id="contact-form"
      className="recipe-form"
      method="post"
      action="/fetch-recipes"
      replace
    >
      <input type="hidden" value={pathname} name="redirectTo" />
      <TextField
        sx={{ mb: 3 }}
        size="small"
        label="Main Ingredient?"
        name="ing"
        type="text"
        fullWidth
      />
      <div className="submit-btn-wrapper">
        <img src="/images/fork-icon.svg" />
        {pathname !== "/" ? (
          <Tooltip title="Randomize a Recipe">{SubmitBtn}</Tooltip>
        ) : (
          SubmitBtn
        )}

        <img src="/images/knife-icon.svg" />
      </div>
    </Form>
  );
};

export default RecipesForm;
