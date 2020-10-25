import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Favorite, ShoppingCart } from "@material-ui/icons";
import { ccyFormat } from "../utils/utils";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux_actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  pointer: {
    cursor: "pointer",
  },
  title: {
    textOverflow: "ellipsis",
  },
  descText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const goToDetail = () => history.push("/details/" + product.id);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.pointer}
        titleTypographyProps={{ className: classes.title }}
        title={product.title}
        subheader={product.category}
        onClick={goToDetail}
      />
      <CardMedia
        className={classes.media + " " + classes.pointer}
        image={product.image}
        title={product.title}
        onClick={goToDetail}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.descText}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: "1",
          }}
        >
          <Typography
            color="primary"
            variant="body1"
            style={{ paddingLeft: "8px" }}
          >
            {"$" + ccyFormat(product.price)}
          </Typography>
          <div>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton
              aria-label="share"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCart />
            </IconButton>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
