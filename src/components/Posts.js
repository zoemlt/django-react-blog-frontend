import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";

const Posts = ({ data }) => {
  return (
    <div>
      {data.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <>
          <Container maxWidth="md" component="main">
            <Grid container spacing={5}>
              {data.map(post => {
                return (
                  <Grid item key={post.id} xs={12} md={4}>
                    <Card>
                      <CardMedia
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                          {post.title.substr(0, 50)}...
                        </Typography>
                        <div>
                          <Typography
                            component="p"
                            color="textPrimary"
                          ></Typography>
                          <Typography variant="p" color="textSecondary">
                            {post.excerpt.substr(0, 60)}...
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Posts;
