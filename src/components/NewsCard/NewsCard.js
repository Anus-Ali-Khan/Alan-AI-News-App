import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles.js";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea href={url} target="_blank">
          <CardMedia
            className={classes.media}
            image={
              urlToImage ||
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2F&psig=AOvVaw3jj6GL4v5i0ETjY7r75o-o&ust=1697178849864000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjH3ITy74EDFQAAAAAdAAAAABAF"
            }
          />
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              {source.name}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5">
            {title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary">
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;