import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../App";
import { Box, Grid } from "@material-ui/core";
import ProductCard from "../_components/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    overflow: "hidden",
    paddingBottom: 10,
  },
  noUnderline: {
    textDecoration: "none",
  },
}));

export const ProductsPage = () => {
  const classes = useStyles();
  const data = useContext(DataContext);

  return (
    <Box className={classes.root} pt={10} pl={11} pr={3}>
      {/* <GridList
        cellHeight={getCellHeights()}
        cols={4}
        className={classes.gridList}
      >
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <Typography variant="h4" component="h5" className={classes.maintitle}>
            Products
          </Typography>
        </GridListTile>
        {data.map((product) => (
          <GridListTile
            className={classes.m3 + ' ' + classes.mh250}
            component={Link}
            to={"/details/" + product.id}
            key={product.id}
            cols={getGridListCols()}
          >
            <img src={product.image} alt={product.title} className={classes.mh250} />
            <GridListTileBar
              title={product.title}
              subtitle={<span>Categories: {product.category}</span>}
            />
          </GridListTile>
        ))}
      </GridList> */}
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid
            className={classes.noUnderline}
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
