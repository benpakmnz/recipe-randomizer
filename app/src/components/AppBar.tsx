import Typography from "@mui/material/Typography";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <img src="/images/dish-finder.svg" style={{ width: 45 }} />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "100",
          }}
        >
          Recipe Randomizer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
