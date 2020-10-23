import React, { useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { DataContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "66px",
  },
  gridList: {
    width: "100%",
    height: "auto",
    paddingLeft: "58px",
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export const ProductsPage = () => {
  const classes = useStyles();
  const data = useContext(DataContext);

  // Media Query
  const theme = useTheme();
  const screenIsLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenIsMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenIsSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenIsXs = useMediaQuery(theme.breakpoints.up("xs"));
  const getGridListCols = () => {
    if (screenIsLg) {
      return 1;
    } else if (screenIsMd) {
      return 2;
    } else if (screenIsSm) {
      return 2;
    } else if (screenIsXs) {
      return 4;
    }
    return 4;
  };
  const getCellHeights = () => {
    if (screenIsMd) {
      return 500;
    } else if (screenIsXs) {
      return 450;
    }
    return 580;
  };

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={getCellHeights()}
        cols={4}
        className={classes.gridList}
      >
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div">Products</ListSubheader>
        </GridListTile>
        {data.map((product) => (
          <GridListTile key={product.id} cols={getGridListCols()}>
            <img src={product.image} alt={product.title} />
            <GridListTileBar
              title={product.title}
              subtitle={<span>Categories: {product.category}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
