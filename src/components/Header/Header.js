import "./Header.css";
import { Grid, Box, Paper } from "@mui/material";

import CustomLink from "./CustomLink/CustomLink";

const Header = () => {
  const links = ["Sign Up", "Log in"];

  return (
    <div className="header">
      <Grid justifyContent="space-between" container>
        <Grid item xs={1}>
          <p>Logo</p>
        </Grid>
        <Grid item xs={11}>
          <Grid justifyContent="flex-end" container spacing={3}>
            {links.map((value) => (
              <Grid key={value} item>
                <CustomLink value={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
