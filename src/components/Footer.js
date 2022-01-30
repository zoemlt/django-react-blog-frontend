import { Container, Typography, Grid, Link, Box } from "@mui/material/";

const Footer = () => {
  const Copyright = () => {
    return (
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link href="https://mui.com/">Your Website</Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    );
  };

  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact Us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    { title: "Legal", description: ["Privacy Policy", "Terms of Use"] },
  ];

  return (
    <>
      <Container maxWidth="md" component="footer">
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default Footer;
