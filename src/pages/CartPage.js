import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../redux_actions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Checkbox, Typography } from "@material-ui/core";
import { DeleteOutline, Remove, ShoppingCartSharp } from "@material-ui/icons";

const TAX_RATE = 0.05;

const useStyles = makeStyles({
  maintitle: {
    marginTop: 77,
  },
  tableContainer: {
    maxWidth: "calc(100% - 109px)",
    marginLeft: "83px",
    marginTop: 10,
  },
  table: {
    maxWidth: "100%",
  },
  buybutton: {
    marginTop: 10,
    marginBottom: 10,
    padding: "15px 25px",
  },
  removebutton: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "-100%",
    transform: "translateX(95%)",
  },
});

const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

const priceRow = (qty, unit) => {
  return qty * unit;
};

const subtotal = (items) => {
  return items
    .map(({ quantity, price }) => quantity * price)
    .reduce((sum, i) => sum + i, 0);
};

const addTax = (total) => {
  return TAX_RATE * total;
};

const invoiceTotal = (subtotal) => {
  return addTax(subtotal) + subtotal;
};

export const CartPage = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.updateCartReducer);
  const dispatch = useDispatch();

  //Checkbox Logic
  const [selected, setSelected] = useState([]); // [ id1, id2, id3, ...]

  const handleChecked = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    let itemToSelect = event.target.getAttribute("aria-labelledby");
    if (event.target.checked) {
      setSelected((prevState) => [...prevState, itemToSelect]);
    } else {
      setSelected((prevState) =>
        prevState.filter((itemId) => itemId !== itemToSelect)
      );
    }
  };
  const handleRemoveSelected = () => {
    dispatch(removeItem(selected));
  };

  const isItemSelected = (id) => {
    return selected.indexOf(id + "") !== -1;
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(() => cart.map((item) => "" + item.id));
    } else {
      setSelected([]);
    }
  };

  useEffect(() => {
    console.log("Array of selected items", selected);
  }, [selected]);

  return (
    <div>
      <Typography variant="h4" component="h5" className={classes.maintitle}>
        My Cart
      </Typography>

      <Button
        color="secondary"
        variant="contained"
        endIcon={<DeleteOutline />}
        onClick={handleRemoveSelected}
        className={classes.removebutton}
      >
        Remove Selected
      </Button>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" colSpan={1}>
                <Checkbox
                  checked={cart.length > 0 && selected.length === cart.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("Cart is ", cart)}
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell colSpan={1}>
                  <Checkbox
                    checked={isItemSelected(item.id)}
                    onChange={handleChecked}
                    inputProps={{ "aria-labelledby": item.id }}
                  />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{"$ " + item.price}</TableCell>
                <TableCell align="right">
                  {"$ " + ccyFormat(priceRow(item.quantity, item.price))}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} colSpan={2} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
                {"$ " + ccyFormat(subtotal(cart))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">
                {"$ " + ccyFormat(addTax(subtotal(cart)))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {"$ " + ccyFormat(invoiceTotal(subtotal(cart)))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ShoppingCartSharp />}
        className={classes.buybutton}
      >
        Check out
      </Button>
    </div>
  );
};
