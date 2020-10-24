import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { DataContext } from "../App";
import { AddShoppingCart } from "@material-ui/icons";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,
    marginLeft: "83px",
    marginRight: "26px",
    marginTop: "74px",
    marginBottom: "10px",
  },
  media: {
    height: 380,
    paddingTop: "56.25%", // 16:9
  },
  addcart: {
    marginLeft: "auto",
  },
  divider: {
    margin: "10px 0",
  },
}));

export const DetailsPage = ({ match }) => {
  const products = useContext(DataContext);
  let selectedProduct = products.filter(
    (prod) => prod.id === Number(match.params.id)
  );
  selectedProduct = selectedProduct[0] || {};

  const classes = useStyles();

  return selectedProduct ? (
    <Card className={classes.root}>
      <CardHeader
        title={selectedProduct.title}
        subheader={selectedProduct.category}
      />
      <CardMedia
        className={classes.media}
        image={selectedProduct.image || "empty"}
        title={selectedProduct.title || "image"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {selectedProduct.description}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" color="textPrimary" component="h4">
          {"$ " + (selectedProduct.price || "---")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart" className={classes.addcart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  ) : (
    ""
  );
};
