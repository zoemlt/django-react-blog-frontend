import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={0} color="default">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Zoe's Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
